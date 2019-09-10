#!/usr/bin/env node

const Koa = require('koa');
const router = require('koa-router')();
const body = require('koa-json-body');

const IPFS = require('ipfs');
const config = require('./config');

const toStream = require('pull-stream-to-stream')

IPFS.create(config).then((ipfs) => {
    router.post('/cat', (ctx, next) => {
        const {path} = ctx.request.body;
        ctx.request.socket.setTimeout(
            5 * 60 * 1000
        );
        ctx.body = toStream.source(
            ipfs.catPullStream(path)
        );
    });

    router.post('/add', (ctx, next) => {
        const {data} = ctx.request.body;

        ctx.request.socket.setTimeout(
            5 * 60 * 1000
        );
        return ipfs.add(new Buffer(data)).then((resp) => {
            if (resp.length === 1) {
                ctx.body = resp[0]["hash"];
            } else {
                ctx.body = resp;
            }
            return next();
        });
    });

    router.get('/health', ctx => {
        ctx.body = 'OK';
    });

    const app = new Koa();

    app.use(body());
    app.use(router.routes());

    app.listen(5555);

    console.log(`Listening on localhost:5555`);
});
