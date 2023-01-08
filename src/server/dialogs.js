import profile from "./profile";

const dialogs = [
  {
    idDialog: 1001,
    users: {
      1: {
        profile: profile[1],
        messages: [
          { date: new Date("12.26.2022 10:12:36"), message: "Hello" },
          { date: new Date("12.26.2022 10:12:45"), message: "How are you?" },
          { date: new Date("12.26.2022 10:14:30"), message: "Me too!" },
        ],
      },
      2: {
        profile: profile[2],
        messages: [
          { date: new Date("12.26.2022 10:13:01"), message: "Hello" },
          {
            date: new Date("12.26.2022 10:13:36"),
            message: "I am fine, and You?",
          },
          {
            date: new Date("12.26.2022 10:15:30"),
            message: "That is Cool =)",
          },
        ],
      },
    },
  },
  {
    idDialog: 1002,
    users: {
      1: {
        profile: profile[1],
        messages: [
          { date: new Date("12.26.2022 12:13:01"), message: "Hello" },
          {
            date: new Date("12.26.2022 12:13:36"),
            message: "Yor Play in LOTR today?",
          },
          {
            date: new Date("12.26.2022 12:20:30"),
            message: "Go play whith me?",
          },
          {
            date: new Date("12.26.2022 12:25:30"),
            message: "Okey, in 5 p.m",
          },
        ],
      },
    },
    3: {
      profile: profile[3],
      messages: [
        { date: new Date("12.26.2022 12:13:45"), message: "Hello" },
        {
          date: new Date("12.26.2022 12:14:36"),
          message: "No I am not paly today! Because I very wont this!",
        },
        {
          date: new Date("12.26.2022 12:23:30"),
          message: "Lets go in 5 p.m, we play this game?",
        },
      ],
    },
  },
  {
    idDialog: 1003,
    users: {
      1: {
        profile: profile[1],
        messages: [
          { date: new Date("12.26.2022 12:13:01"), message: "Hello" },
          {
            date: new Date("12.26.2022 12:13:36"),
            message: "1-1-010121",
          },
          {
            date: new Date("12.26.2022 12:20:30"),
            message: "qwioeuqoie qowieu qoiwe ",
          },
          {
            date: new Date("12.26.2022 12:25:30"),
            message: "qpweioqwiue qowieu oqiweu ",
          },
        ],
      },
    },
    4: {
      profile: profile[4],
      messages: [
        { date: new Date("12.26.2022 12:13:45"), message: "Hello" },
        {
          date: new Date("12.26.2022 12:14:36"),
          message: "qwerrwer wpoeri weo ",
        },
        {
          date: new Date("12.26.2022 12:23:30"),
          message: "qweoqpwieqoiep",
        },
      ],
    },
  },
];

export default dialogs;
