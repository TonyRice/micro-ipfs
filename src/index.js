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
        const stream = ipfs.catPullStream(path);
        ctx.body = toStream.source(stream);
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
