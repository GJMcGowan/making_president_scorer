export type TCandidate = 'nixon' | 'kennedy' | 'byrd';

export interface IStates {
  [key: string]: {
    id: string;
    val: string;
    votes: number;
    heldBy?: TCandidate;
    historicallyHeldBy?: TCandidate;
  }
}

export const allStates: IStates = {
  "10": {
    "id": "DE",
    "val": "10",
    votes: 3,
    historicallyHeldBy: 'kennedy'
  },
  "12": {
    "id": "FL",
    "val": "12",
    votes: 10,
    historicallyHeldBy: 'nixon'
  },
  "13": {
    "id": "GA",
    "val": "13",
    votes: 12,
    historicallyHeldBy: 'kennedy'
  },
  "15": {
    "id": "HI",
    "val": "15",
    votes: 3,
    historicallyHeldBy: 'kennedy'
  },
  "16": {
    "id": "ID",
    "val": "16",
    votes: 4,
    historicallyHeldBy: 'nixon'
  },
  "17": {
    "id": "IL",
    "val": "17",
    votes: 27,
    historicallyHeldBy: 'kennedy'
  },
  "18": {
    "id": "IN",
    "val": "18",
    votes: 13,
    historicallyHeldBy: 'nixon'
  },
  "19": {
    "id": "IA",
    "val": "19",
    votes: 10,
    historicallyHeldBy: 'nixon'
  },
  "20": {
    "id": "KS",
    "val": "20",
    votes: 8,
    historicallyHeldBy: 'nixon'
  },
  "21": {
    "id": "KY",
    "val": "21",
    votes: 10,
    historicallyHeldBy: 'nixon'
  },
  "22": {
    "id": "LA",
    "val": "22",
    votes: 10,
    historicallyHeldBy: 'kennedy'
  },
  "23": {
    "id": "ME",
    "val": "23",
    votes: 5,
    historicallyHeldBy: 'nixon'
  },
  "24": {
    "id": "MD",
    "val": "24",
    votes: 9,
    historicallyHeldBy: 'kennedy'
  },
  "25": {
    "id": "MA",
    "val": "25",
    votes: 16,
    historicallyHeldBy: 'kennedy'
  },
  "26": {
    "id": "MI",
    "val": "26",
    votes: 20,
    historicallyHeldBy: 'kennedy'
  },
  "27": {
    "id": "MN",
    "val": "27",
    votes: 11,
    historicallyHeldBy: 'kennedy'
  },
  "28": {
    "id": "MS",
    "val": "28",
    votes: 8,
    historicallyHeldBy: 'byrd'
  },
  "29": {
    "id": "MO",
    "val": "29",
    votes: 13,
    historicallyHeldBy: 'kennedy'
  },
  "30": {
    "id": "MT",
    "val": "30",
    votes: 4,
    historicallyHeldBy: 'nixon'
  },
  "31": {
    "id": "NE",
    "val": "31",
    votes: 6,
    historicallyHeldBy: 'nixon'
  },
  "32": {
    "id": "NV",
    "val": "32",
    votes: 3,
    historicallyHeldBy: 'kennedy'
  },
  "33": {
    "id": "NH",
    "val": "33",
    votes: 4,
    historicallyHeldBy: 'nixon'
  },
  "34": {
    "id": "NJ",
    "val": "34",
    votes: 16,
    historicallyHeldBy: 'kennedy'
  },
  "35": {
    "id": "NM",
    "val": "35",
    votes: 4,
    historicallyHeldBy: 'kennedy'
  },
  "36": {
    "id": "NY",
    "val": "36",
    votes: 45,
    historicallyHeldBy: 'kennedy'
  },
  "37": {
    "id": "NC",
    "val": "37",
    votes: 14,
    historicallyHeldBy: 'kennedy'
  },
  "38": {
    "id": "ND",
    "val": "38",
    votes: 4,
    historicallyHeldBy: 'nixon'
  },
  "39": {
    "id": "OH",
    "val": "39",
    votes: 25,
    historicallyHeldBy: 'nixon'
  },
  // COMPLEX AS BYRD GETS A VOTE
  "40": {
    "id": "OK",
    "val": "40",
    votes: 8,
    historicallyHeldBy: 'byrd'
  },
  "41": {
    "id": "OR",
    "val": "41",
    votes: 6,
    historicallyHeldBy: 'nixon'
  },
  "42": {
    "id": "PA",
    "val": "42",
    votes: 32,
    historicallyHeldBy: 'kennedy'
  },
  "44": {
    "id": "RI",
    "val": "44",
    votes: 4,
    historicallyHeldBy: 'kennedy'
  },
  "45": {
    "id": "SC",
    "val": "45",
    votes: 8,
    historicallyHeldBy: 'kennedy'
  },
  "46": {
    "id": "SD",
    "val": "46",
    votes: 4,
    historicallyHeldBy: 'nixon'
  },
  "47": {
    "id": "TN",
    "val": "47",
    votes: 11,
    historicallyHeldBy: 'nixon'
  },
  "48": {
    "id": "TX",
    "val": "48",
    votes: 24,
    historicallyHeldBy: 'kennedy'
  },
  "49": {
    "id": "UT",
    "val": "49",
    votes: 4,
    historicallyHeldBy: 'nixon'
  },
  "50": {
    "id": "VT",
    "val": "50",
    votes: 3,
    historicallyHeldBy: 'nixon'
  },
  "51": {
    "id": "VA",
    "val": "51",
    votes: 12,
    historicallyHeldBy: 'nixon'
  },
  "53": {
    "id": "WA",
    "val": "53",
    votes: 9,
    historicallyHeldBy: 'nixon'
  },
  "54": {
    "id": "WV",
    "val": "54",
    votes: 8,
    historicallyHeldBy: 'kennedy'
  },
  "55": {
    "id": "WI",
    "val": "55",
    votes: 12,
    historicallyHeldBy: 'nixon'
  },
  "56": {
    "id": "WY",
    "val": "56",
    votes: 3,
    historicallyHeldBy: 'nixon'
  },
  // COMPLEX AS BYRD = 6, KENNEDY = 5
  "01": {
    "id": "AL",
    "val": "01",
    votes: 11,
    historicallyHeldBy: 'byrd'
  },
  "02": {
    "id": "AK",
    "val": "02",
    votes: 3,
    historicallyHeldBy: 'nixon'
  },
  "04": {
    "id": "AZ",
    "val": "04",
    votes: 4,
    historicallyHeldBy: 'nixon'
  },
  "05": {
    "id": "AR",
    "val": "05",
    votes: 8,
    historicallyHeldBy: 'kennedy'
  },
  "06": {
    "id": "CA",
    "val": "06",
    votes: 32,
    historicallyHeldBy: 'nixon'
  },
  "08": {
    "id": "CO",
    "val": "08",
    votes: 6,
    historicallyHeldBy: 'nixon'
  },
  "09": {
    "id": "CT",
    "val": "09",
    votes: 8,
    historicallyHeldBy: 'kennedy'
  }
}
