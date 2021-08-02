import XAPI, { Activity, Actor, Context, Statement, Verb } from "@xapi/xapi";
import store from 'store2';

export { generateAnonymousAgentObject, generateCourseContextObject, generateCourseObject } from './helpers';

const endpoint = process.env.REACT_APP_CONKER_API_URL ?? '';
const auth = process.env.REACT_APP_CONKER_API_KEY ?? '';
const xapi: XAPI = new XAPI(endpoint, auth);

export const CourseVerbs = XAPI.Verbs;

export const reportActivity = (
    learner: Actor,
    action: Verb,
    course: Activity,
    context?: Context
) => {
    const xApiStatement: Statement = {
        actor: learner,
        verb: action,
        object: course,
        context: context
    };

    return xapi.sendStatement(xApiStatement);
}

export const clearActionData = () => {
  store.clearAll();
};
