const express = require('express');
const appRouter = express.Router();

const { UserRouter } = require('../router/userRouter');
const LoginRouter  = require('../router/loginRouter');
const {AddWorkoutRouter} = require('../router/addWorkoutRouter');
const { SaveWorkRouter } = require ('../router/saveWorkoutRouter');
const { FavRouter } = require('../router/favRouter');


appRouter.use('/workouts', AddWorkoutRouter);
appRouter.use('/saveworkout', SaveWorkRouter);
appRouter.use('/fav', FavRouter);
appRouter.use('/user', UserRouter);
appRouter.use('/', LoginRouter)

module.exports = appRouter;