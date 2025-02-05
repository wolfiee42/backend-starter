import { Router } from "express";
import { PdfRoutes } from "../modules/pdf/pdf.routes";

const router = Router();


const moduleRoutes = [
    {
        path: '/pdf',
        route: PdfRoutes
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route))


export default router;