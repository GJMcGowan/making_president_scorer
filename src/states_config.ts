export type TCandidate = 'nixon' | 'kennedy';

export interface IStates {
  [key: string]: {
    id: string;
    val: string;
    votes: number;
    heldBy?: TCandidate;
  }
}

export const allStates: IStates = {
  "10": {
    "id": "DE",
    "val": "10",
    votes: 3
  },
  "12": {
    "id": "FL",
    "val": "12",
    votes: 10
  },
  "13": {
    "id": "GA",
    "val": "13",
    votes: 12
  },
  "15": {
    "id": "HI",
    "val": "15",
    votes: 3
  },
  "16": {
    "id": "ID",
    "val": "16",
    votes: 4
  },
  "17": {
    "id": "IL",
    "val": "17",
    votes: 27
  },
  "18": {
    "id": "IN",
    "val": "18",
    votes: 13
  },
  "19": {
    "id": "IA",
    "val": "19",
    votes: 10
  },
  "20": {
    "id": "KS",
    "val": "20",
    votes: 8
  },
  "21": {
    "id": "KY",
    "val": "21",
    votes: 10
  },
  "22": {
    "id": "LA",
    "val": "22",
    votes: 10
  },
  "23": {
    "id": "ME",
    "val": "23",
    votes: 5
  },
  "24": {
    "id": "MD",
    "val": "24",
    votes: 9
  },
  "25": {
    "id": "MA",
    "val": "25",
    votes: 16
  },
  "26": {
    "id": "MI",
    "val": "26",
    votes: 20
  },
  "27": {
    "id": "MN",
    "val": "27",
    votes: 11
  },
  "28": {
    "id": "MS",
    "val": "28",
    votes: 8
  },
  "29": {
    "id": "MO",
    "val": "29",
    votes: 13
  },
  "30": {
    "id": "MT",
    "val": "30",
    votes: 4
  },
  "31": {
    "id": "NE",
    "val": "31",
    votes: 6
  },
  "32": {
    "id": "NV",
    "val": "32",
    votes: 3
  },
  "33": {
    "id": "NH",
    "val": "33",
    votes: 4
  },
  "34": {
    "id": "NJ",
    "val": "34",
    votes: 16
  },
  "35": {
    "id": "NM",
    "val": "35",
    votes: 4
  },
  "36": {
    "id": "NY",
    "val": "36",
    votes: 45
  },
  "37": {
    "id": "NC",
    "val": "37",
    votes: 14
  },
  "38": {
    "id": "ND",
    "val": "38",
    votes: 4
  },
  "39": {
    "id": "OH",
    "val": "39",
    votes: 25
  },
  "40": {
    "id": "OK",
    "val": "40",
    votes: 8
  },
  "41": {
    "id": "OR",
    "val": "41",
    votes: 6
  },
  "42": {
    "id": "PA",
    "val": "42",
    votes: 32
  },
  "44": {
    "id": "RI",
    "val": "44",
    votes: 4
  },
  "45": {
    "id": "SC",
    "val": "45",
    votes: 8
  },
  "46": {
    "id": "SD",
    "val": "46",
    votes: 4
  },
  "47": {
    "id": "TN",
    "val": "47",
    votes: 11
  },
  "48": {
    "id": "TX",
    "val": "48",
    votes: 24
  },
  "49": {
    "id": "UT",
    "val": "49",
    votes: 4
  },
  "50": {
    "id": "VT",
    "val": "50",
    votes: 3
  },
  "51": {
    "id": "VA",
    "val": "51",
    votes: 12
  },
  "53": {
    "id": "WA",
    "val": "53",
    votes: 9
  },
  "54": {
    "id": "WV",
    "val": "54",
    votes: 8
  },
  "55": {
    "id": "WI",
    "val": "55",
    votes: 12
  },
  "56": {
    "id": "WY",
    "val": "56",
    votes: 3
  },
  "01": {
    "id": "AL",
    "val": "01",
    votes: 11
  },
  "02": {
    "id": "AK",
    "val": "02",
    votes: 3
  },
  "04": {
    "id": "AZ",
    "val": "04",
    votes: 4
  },
  "05": {
    "id": "AR",
    "val": "05",
    votes: 8
  },
  "06": {
    "id": "CA",
    "val": "06",
    votes: 32
  },
  "08": {
    "id": "CO",
    "val": "08",
    votes: 6
  },
  "09": {
    "id": "CT",
    "val": "09",
    votes: 8
  }
}
