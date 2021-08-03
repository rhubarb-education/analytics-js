import { Activity, Agent, ContextActivity } from '@xapi/xapi';
import store from 'store2';

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 12);
};

export const getId = () => {
  if (!store('re_uid')) {
    store('re_uid', generateId());
  }
  return store('re_uid');
};

export const generateCourseObject = (id: string, name: string, description: string) => {
  return {
      objectType: "Activity",
      id: id,
      definition: {
          name: {
              "en-US": name
          },
          description: {
              "en-US": description
          },
          type: "http://adlnet.gov/expapi/activities/course"
      }
  } as Activity
}

export const generateAnonymousAgentObject = (homePage: string, userId: string = getId()): Agent => {
  return {
      objectType: "Agent",
      name: `Anonymous (${userId})` ,
      account: {
          "homePage": homePage,
          "name": userId,
      },
  }
}

export const generateCourseContextObject = (id: string, name: string, description: string): ContextActivity => {
  return {
        objectType: "Activity",
        id: id,
        definition: {
            name: {
                "en-US": name,
            },
            description: {
                "en-US": description
            },
            type: "http://adlnet.gov/expapi/activities/course"
        }
    }
}