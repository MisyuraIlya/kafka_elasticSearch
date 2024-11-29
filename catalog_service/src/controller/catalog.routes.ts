import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

// @ts-ignore
router.post('/product', async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(201).json({});
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
})

export default router;
