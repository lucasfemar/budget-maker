import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
   response.render("index")
})


router.get("/servico", (request, response) => {
   response.render("servico")
})

export { router }