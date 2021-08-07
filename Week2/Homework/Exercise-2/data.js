const AUTHORS_DATA = [
  {
    author_name: "William Faulkner",
    university: "Vanderbilt University",
    date_of_birth: " 1897-01-30",
    h_index: "105",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Tennessee Williams",
    university: "Smith College",
    date_of_birth: " 1911-06-12",
    h_index: "106",
    gender: "f",
    mentor: 2,
  },
  {
    author_name: "Kurt Vonnegut",
    university: "University of Mississippi",
    date_of_birth: " 1922-05-21",
    h_index: "107",
    gender: "f",
    mentor: 2,
  },
  {
    author_name: "Harper Lee",
    university: "New York University",
    date_of_birth: " 1960-05-21",
    h_index: "108",
    gender: "m",
    mentor: 4,
  },
  {
    author_name: "John Steinbeck",
    university: "Colorado College",
    date_of_birth: " 1945-07-10",
    h_index: "109",
    gender: "f",
    mentor: 7,
  },
  {
    author_name: " Ray Bradbury",
    university: "Colorado College",
    date_of_birth: " 1966-07-10",
    h_index: "110",
    gender: "m",
    mentor: 7,
  },
  {
    author_name: "Truman Capote",
    university: "University of Chicago",
    date_of_birth: " 1950-09-25",
    h_index: "111",
    gender: "m",
    mentor: 8,
  },
  {
    author_name: "Edgar Allan Poe",
    university: "Hamilton College",
    date_of_birth: " 1910-05-11",
    h_index: "112",
    gender: "f",
    mentor: 8,
  },
  {
    author_name: "Alice Walker",
    university: "Harvard",
    date_of_birth: " 1915-03-12",
    h_index: "113",
    gender: "f",
    mentor: 9,
  },
  {
    author_name: "Joseph Heller",
    university: "The University of the South",
    date_of_birth: " 1940-02-25",
    h_index: "114",
    gender: "m",
    mentor: 10,
  },
  {
    author_name: "Edgar Allan Poe",
    university: "University of Hartford",
    date_of_birth: "1809-06-22",
    h_index: "100",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Herman Melville",
    university: "Wesleyan University",
    date_of_birth: "1819-05-21",
    h_index: "101",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Walt Whitman",
    university: "Sarah Lawrence College",
    date_of_birth: "1819-09-20",
    h_index: "102",
    gender: "m",
    mentor: 2,
  },
  {
    author_name: "Mark Twain",
    university: "Oberlin College",
    date_of_birth: "1835-03-13",
    h_index: "103",
    gender: "m",
    mentor: 3,
  },
  {
    author_name: "T.S. Eliot",
    university: "Williams College",
    date_of_birth: " 1888-04-15",
    h_index: "104",
    gender: "m",
    mentor: 4,
  },
];

const PAPER_DATA = [
  {
    paper_title: "title-1",
    conference: "AA",
    publish_date: "2021-01-30",
  },
  {
    paper_title: "title-2",
    conference: "AA",
    publish_date: "2018-02-26",
  },
  {
    paper_title: "title-3",
    conference: "BB",
    publish_date: "1993-05-20",
  },
  {
    paper_title: "title-4",
    conference: "BB",
    publish_date: "1999-03-05",
  },
  {
    paper_title: "title-5",
    conference: "CC",
    publish_date: "1960-01-15",
  },
  {
    paper_title: "title-6",
    conference: "CC",
    publish_date: "1990-05-26",
  },
  {
    paper_title: "title-7",
    conference: "DD",
    publish_date: "2015-09-01",
  },
  {
    paper_title: "title-8",
    conference: "DD",
    publish_date: "1970-02-12",
  },
  {
    paper_title: "title-9",
    conference: "FF",
    publish_date: "2000-02-06",
  },
  {
    paper_title: "title-10",
    conference: "FF",
    publish_date: "2011-01-11",
  },
  {
    paper_title: "title-11",
    conference: "JJ",
    publish_date: "2013-02-22",
  },
  {
    paper_title: "title-12",
    conference: "JJ",
    publish_date: "1970-02-12",
  },
  {
    paper_title: "title-13",
    conference: "JJ",
    publish_date: "2006-02-27",
  },
  {
    paper_title: "title-14",
    conference: "YY",
    publish_date: "1970-02-12",
  },
  {
    paper_title: "title-15",
    conference: "RR",
    publish_date: "2001-09-19",
  },
  {
    paper_title: "title-16",
    conference: "JJ",
    publish_date: "1970-02-12",
  },
  {
    paper_title: "title-17",
    conference: "LL",
    publish_date: "1985-02-19",
  },
  {
    paper_title: "title-18",
    conference: "SSS",
    publish_date: "1972-01-12",
  },
  {
    paper_title: "title-19",
    conference: "MM",
    publish_date: "1971-02-19",
  },
  {
    paper_title: "title-20",
    conference: "GG",
    publish_date: "1975-01-24",
  },
  {
    paper_title: "title-21",
    conference: "BB",
    publish_date: "2003-03-13",
  },
  {
    paper_title: "title-23",
    conference: "FM",
    publish_date: "2000-09-12",
  },
  {
    paper_title: "title-24",
    conference: "EE",
    publish_date: "2011-01-01",
  },
  {
    paper_title: "title-25",
    conference: "SS",
    publish_date: "2019-05-12",
  },
  {
    paper_title: "title-26",
    conference: "II",
    publish_date: "1980-04-20",
  },
  {
    paper_title: "title-27",
    conference: "II",
    publish_date: "2011-01-01",
  },
  {
    paper_title: "title-28",
    conference: "SS",
    publish_date: "1915-09-30",
  },
  {
    paper_title: "title-29",
    conference: "QQ",
    publish_date: "2011-01-01",
  },
  {
    paper_title: "title-30",
    conference: "WW",
    publish_date: "2003-03-03",
  },
];

const JUNCTION_DATA = [
  {
    author_no: 1,
    paper_id: 1,
  },
  {
    author_no: 1,
    paper_id: 2,
  },
  {
    author_no: 2,
    paper_id: 2,
  },
  {
    author_no: 2,
    paper_id: 3,
  },
  {
    author_no: 3,
    paper_id: 4,
  },
  {
    author_no: 3,
    paper_id: 5,
  },
  {
    author_no: 4,
    paper_id: 5,
  },
  {
    author_no: 4,
    paper_id: 6,
  },
  {
    author_no: 5,
    paper_id: 6,
  },
  {
    author_no: 6,
    paper_id: 7,
  },
  {
    author_no: 6,
    paper_id: 8,
  },
  {
    author_no: 7,
    paper_id: 8,
  },
  {
    author_no: 8,
    paper_id: 9,
  },
  {
    author_no: 8,
    paper_id: 10,
  },
  {
    author_no: 9,
    paper_id: 11,
  },
  {
    author_no: 9,
    paper_id: 12,
  },
  {
    author_no: 10,
    paper_id: 13,
  },
  {
    author_no: 11,
    paper_id: 14,
  },
  {
    author_no: 12,
    paper_id: 15,
  },
  {
    author_no: 13,
    paper_id: 16,
  },
  {
    author_no: 5,
    paper_id: 17,
  },
  {
    author_no: 6,
    paper_id: 18,
  },
  {
    author_no: 12,
    paper_id: 18,
  },
  {
    author_no: 13,
    paper_id: 15,
  },
  {
    author_no: 14,
    paper_id: 19,
  },
  {
    author_no: 15,
    paper_id: 20,
  },
  {
    author_no: 9,
    paper_id: 21,
  },
  {
    author_no: 15,
    paper_id: 22,
  },
  {
    author_no: 12,
    paper_id: 22,
  },
  {
    author_no: 7,
    paper_id: 23,
  },
  {
    author_no: 12,
    paper_id: 23,
  },
  {
    author_no: 14,
    paper_id: 24,
  },
  {
    author_no: 9,
    paper_id: 25,
  },
  {
    author_no: 11,
    paper_id: 23,
  },
  {
    author_no: 13,
    paper_id: 20,
  },
  {
    author_no: 15,
    paper_id: 27,
  },
  {
    author_no: 5,
    paper_id: 23,
  },
  {
    author_no: 15,
    paper_id: 29,
  },
  {
    author_no: 13,
    paper_id: 30,
  },
];

module.exports = { AUTHORS_DATA, PAPER_DATA, JUNCTION_DATA };

console.log(AUTHORS_DATA.length);
