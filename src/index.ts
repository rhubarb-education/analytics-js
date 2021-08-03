import XAPI, { Activity, Actor, Context, Statement, Verb } from "@xapi/xapi";
import { AxiosPromise } from "axios";
import store from 'store2';

export { generateAnonymousAgentObject, generateCourseContextObject, generateCourseObject } from './helpers';

type IConker = {
    _client: XAPI | null;
    init: (opts: IConkerInit) => XAPI;
    report: (learner: Actor, action: Verb, course: Activity, context?: Context) => AxiosPromise<string[]> | void;
    clearLocalData: () => void;
}

type IConkerInit = {
    endpoint: string, 
    user: string, 
    pass: string
}

export const Conker: IConker = {
    _client: null,

    init: (opts: IConkerInit) => {
        if (Conker._client) {
            console.warn('Conker.init() was called multiple times, ignoring...')
            return Conker._client
        }
        let auth = XAPI.toBasicAuth(opts.user, opts.pass)
        Conker._client = new XAPI(opts.endpoint, auth);
        return Conker._client
    },

    report: (
        learner: Actor,
        action: Verb,
        course: Activity,
        context?: Context
    ) => {
        if (!Conker._client) {
            console.error('No conker client initiated. Have you called Conker.init()?');
            return;
        }

        const xApiStatement: Statement = {
            actor: learner,
            verb: action,
            object: course,
            context: context
        };
    
        return Conker._client.sendStatement(xApiStatement);
    },

    clearLocalData: () => {
        store.clearAll();
    }
}

export const CourseVerbs = XAPI.Verbs;