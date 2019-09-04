#!/usr/bin/env node

const Koa = require('koa');
const router = require('koa-router')();
const body = require('koa-json-body');

const IPFS = require('ipfs');
const config = require('./config');

IPFS.create(config).then((ipfs) => {

    router.post('/cat', (ctx, next) => {
        const {path} = ctx.request.body;
        return ipfs.cat(path).then((file) => {
            ctx.body = file;

            next()
        })
    });

    router.get('/health', ctx => {
        ctx.body = 'OK';
    });

    const app = new Koa();

    app.use(body());
    app.use(router.routes());

    app.listen(5555);

    console.log(`Listening on localhost:${port}`);
});
