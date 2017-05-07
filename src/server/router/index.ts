import * as Router from "koa-router";

export let router = new Router();

router.get("/hello", async (ctx) => {
    ctx.body = "hello";
});

router.get("/movie", async (ctx) => {
    ctx.body = {
        "name": "WarStar",
        "date": "1970"
    }
});
