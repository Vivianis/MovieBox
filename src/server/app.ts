import * as koa from "koa";
import * as koabody from "koa-body";
import { router } from "./router/index"

let app = new koa();

app.use(koabody());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);
console.log("the server is listen on the port:" + 3001);

export =app
