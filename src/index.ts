import XAPI, { Activity, Actor, Context, Statement, Timestamp, Verb } from "@xapi/xapi";
import { AxiosPromise } from "axios";
import store from 'store2';
import { generateAnonymousAgentObject, generateCourseContextObject, generateCourseObject } from './helpers';

type IConker = {
    _client: XAPI | null;
    verbs: typeof XAPI.Verbs;
    init: (config: IConkerConfig) => XAPI;
    report: (learner: Actor, action: Verb, course: Activity, context?: Context, timestamp?: Timestamp) => AxiosPromise<string[]> | void;
    clearLocalData: () => void;
    generateAnonymousAgentObject: typeof generateAnonymousAgentObject; 
    generateCourseContextObject: typeof generateCourseContextObject; 
    generateCourseObject: typeof generateCourseObject;
}

export type IConkerConfig = {
    endpoint: string, 
    key: string, 
    secret: string
}

export const Conker: IConker = {
    _client: null,
    verbs:  XAPI.Verbs,

    init: (config: IConkerConfig) => {
        if (Conker._client) {
            console.warn('Conker.init() was called multiple times, ignoring...')
            return Conker._client
        }
        let auth = XAPI.toBasicAuth(config.key, config.secret)
        Conker._client = new XAPI(config.endpoint, auth);
        return Conker._client
    },

    report: (
        learner: Actor,
        action: Verb,
        course: Activity,
        context?: Context,
        timestamp?: Timestamp,
    ) => {
        if (!Conker._client) {
            console.error('No conker client initialized. Have you called Conker.init()?');
            return;
        }

        const xApiStatement: Statement = {
            actor: learner,
            verb: action,
            object: course,
            context: context,
            timestamp,
        };
    
        return Conker._client.sendStatement(xApiStatement);
    },

    clearLocalData: () => {
        store.clearAll();
    },

    generateAnonymousAgentObject, 
    generateCourseContextObject, 
    generateCourseObject
}