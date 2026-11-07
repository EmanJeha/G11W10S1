/* Questions for both games. Edit text here; keep the structure.
   Question types:
     mc    – multiple choice (options + answer index)
     order – tap tiles into the right order
     line  – tap a line (here: the table row that breaks the primary key rule)
     bins  – sort each item into one of two (or three) groups
   Any question can have its own "seconds". */
window.SITE_INFO = {
 "badge": "Grade 11 · Unit 4 · Sprint 4.1 · Session 1",
 "titleText": "Database Games",
 "warmup": {
  "label": "Warm-up",
  "sub": "Guess today’s topic"
 },
 "wrapup": {
  "label": "Wrap-up",
  "sub": "Unlock every key"
 },
 "titleHTML": "<span class=\"c1\">D</span><span class=\"c2\">a</span><span class=\"c3\">t</span><span class=\"c4\">a</span><span class=\"c5\">b</span><span class=\"c1\">a</span><span class=\"c2\">s</span><span class=\"c3\">e</span><br><span class=\"c4\">G</span><span class=\"c5\">a</span><span class=\"c1\">m</span><span class=\"c2\">e</span><span class=\"c3\">s</span>"
};

window.GAMES = {
 "warmup": {
  "badge": "Unit 4 · Sprint 4.1 · Session 1 · Warm-up",
  "name": "Data Hunt!",
  "titleHTML": "<span class=\"c1\">D</span><span class=\"c2\">a</span><span class=\"c3\">t</span><span class=\"c4\">a</span><br><span class=\"c5\">H</span><span class=\"c1\">u</span><span class=\"c2\">n</span><span class=\"c3\">t</span><span class=\"c4\">!</span>",
  "intro": "Your phone, your timetable, your playlist… information is everywhere! Every correct answer flips two letters of today’s mystery topic. Answer fast, build a streak, and crack the topic for +200!",
  "rules": [
   "Play on your own device (or with your breakout partner)",
   "Faster answers = more points",
   "3 right in a row = 🔥 streak bonus",
   "Crack the topic early: +200",
   "Watch your name climb on the teacher’s screen"
  ],
  "seconds": 40,
  "points": 100,
  "floaters": [
   "📱",
   "🗓️",
   "🎵",
   "👥",
   "🗄️",
   "📋",
   "🔑",
   "🔗"
  ],
  "topic": "Introduction to Databases",
  "mystery": {
   "label": "Today’s mystery topic",
   "phrase": "INTRO TO DATABASES",
   "order": [
    1,
    11,
    4,
    16,
    6,
    2,
    13,
    0,
    14,
    7,
    3,
    10,
    15,
    9,
    12,
    17
   ],
   "perCorrect": 2,
   "bonus": 200,
   "accept": [
    "intro to databases",
    "introduction to databases",
    "databases",
    "database",
    "intro to database",
    "introduction to database",
    "intro databases"
   ],
   "finalQ": "Put all the clues together. What is today’s topic?",
   "finalOptions": [
    "Binary Search",
    "Introduction to Databases",
    "GitHub and Project Management",
    "Cyber security"
   ],
   "finalAnswer": 1,
   "finalWhy": "Every clue was about keeping information organised so it is quick to find and update. A database does exactly that for computers."
  },
  "questions": [
   {
    "type": "mc",
    "ctx": "Phone contacts",
    "skill": "Understand",
    "q": "You have 600 contacts and need Sara’s number NOW. What helps you find it fastest?",
    "options": [
     "Scrolling an unsorted list",
     "Contacts sorted by name, with a search box",
     "Writing every number on paper",
     "Asking a friend to look"
    ],
    "answer": 1,
    "why": "Organised information (sorted, with search) is fast to find. Messy information is slow."
   },
   {
    "type": "bins",
    "ctx": "Sort it",
    "skill": "Analyze",
    "seconds": 50,
    "q": "Organised or messy? Sort each way of keeping information.",
    "bins": [
     "Organised 😎",
     "Messy 😵"
    ],
    "items": [
     {
      "t": "A timetable with subject, time and room for every lesson",
      "b": 0
     },
     {
      "t": "Phone numbers scribbled on random sticky notes",
      "b": 1
     },
     {
      "t": "A playlist with title, artist and album for every song",
      "b": 0
     },
     {
      "t": "Homework saved as new_file(7).docx in five folders",
      "b": 1
     }
    ],
    "why": "Organised information has the same details for every item, kept in one place."
   },
   {
    "type": "mc",
    "ctx": "Timetable",
    "skill": "Understand",
    "q": "Your timetable says: Monday · ICT · 9:00 · Room 204. What is “Room 204”?",
    "scene": "<span class=\"chip\" style=\"background:#5B5BF0\">Monday</span><span class=\"chip\" style=\"background:#12B886\">ICT</span><span class=\"chip\" style=\"background:#FF5D73\">9:00</span><span class=\"chip\" style=\"background:#1C9BEF\">Room 204</span>",
    "options": [
     "One piece of information about the lesson",
     "The whole timetable",
     "A list of every lesson",
     "A type of computer"
    ],
    "answer": 0,
    "why": "“Room 204” is one detail about one lesson. In a database, that is one value in one cell."
   },
   {
    "type": "mc",
    "ctx": "Playlist",
    "skill": "Understand",
    "q": "In a playlist, every line shows a title, an artist and an album. What does ONE line describe?",
    "options": [
     "The whole music app",
     "One song",
     "Every artist",
     "The phone"
    ],
    "answer": 1,
    "why": "One line = everything about one song. In a database, that is one row (record)."
   },
   {
    "type": "mc",
    "ctx": "Two Ahmeds",
    "skill": "Analyze",
    "q": "Two students are both called Ahmed Ali. How can the school tell them apart?",
    "options": [
     "By their first name",
     "By their favourite colour",
     "By a unique student ID number",
     "By their grade"
    ],
    "answer": 2,
    "why": "Names can repeat, but a student ID is unique. That idea is called a primary key."
   },
   {
    "type": "order",
    "ctx": "Find it",
    "skill": "Apply",
    "seconds": 50,
    "q": "Put the steps for finding a friend’s photos in order.",
    "sub": "Tap the tiles in order.",
    "tiles": [
     "Tap the right profile",
     "Open the friends list",
     "See the photos",
     "Type the name in search"
    ],
    "answer": [
     "Open the friends list",
     "Type the name in search",
     "Tap the right profile",
     "See the photos"
    ],
    "why": "Open the list → search → pick the right record → see its details. Databases make this fast."
   },
   {
    "type": "mc",
    "ctx": "School system",
    "skill": "Understand",
    "q": "Where should a school keep students, teachers, classes, grades and attendance so staff can find and update them fast?",
    "options": [
     "In one organised electronic system",
     "On sticky notes in each classroom",
     "In students’ backpacks",
     "In one paper notebook"
    ],
    "answer": 0,
    "why": "One organised electronic system that stores, manages and retrieves information is a database."
   }
  ],
  "endHTML": "<div class=\"reveal\"><span class=\"pill\">Today's topic</span><div class=\"big\">Introduction to Databases</div><p class=\"lede\">Store it, organise it, find it fast.</p></div>\n<div class=\"recap\"><div><b>Database</b>An organised electronic system</div><div><b>Tables</b>Rows and columns of data</div><div><b>Keys</b>Identify and link records</div></div>"
 },
 "wrapup": {
  "badge": "Unit 4 · Sprint 4.1 · Session 1 · Wrap-up",
  "name": "Key Quest",
  "titleHTML": "<span class=\"c1\">K</span><span class=\"c2\">e</span><span class=\"c3\">y</span><br><span class=\"c4\">Q</span><span class=\"c5\">u</span><span class=\"c1\">e</span><span class=\"c2\">s</span><span class=\"c3\">t</span>",
  "intro": "Ten challenges on databases: sort columns and rows, pick the data type, spot the broken primary key and link tables with foreign keys. Unlock every key!",
  "rules": [
   "Play on your own device (or with your breakout partner)",
   "Faster answers = more points",
   "3 right in a row = 🔥 streak bonus",
   "Sort cards, order tiles and tap rows",
   "Watch your name climb on the teacher’s screen"
  ],
  "seconds": 45,
  "points": 100,
  "floaters": [
   "🗄️",
   "🔑",
   "🔗",
   "INT",
   "VARCHAR",
   "DATE",
   "📋",
   "✓"
  ],
  "topic": "Introduction to Databases",
  "exit": {
   "q": "What is a primary key? Which column is the primary key in the Students table, and why?",
   "placeholder": "A primary key is…",
   "model": "A primary key is a column that uniquely identifies each row; it must be unique and cannot be empty (null). In the Students table it is StudentID, because every student has a different ID, while names can repeat."
  },
  "questions": [
   {
    "type": "mc",
    "ctx": "Database",
    "skill": "Remember",
    "q": "What is a database?",
    "options": [
     "A structured system for storing, managing and retrieving information electronically",
     "A program for drawing pictures",
     "One long list typed into a notebook",
     "A website for sharing videos"
    ],
    "answer": 0,
    "why": "A database is a structured, electronic system that makes information easy to access, update and manage."
   },
   {
    "type": "bins",
    "ctx": "Columns or rows",
    "skill": "Analyze",
    "seconds": 50,
    "q": "Column (field) or row (record)? Sort each card.",
    "bins": [
     "⬇️ Column (field)",
     "➡️ Row (record)"
    ],
    "items": [
     {
      "t": "FirstName, for every student",
      "b": 0
     },
     {
      "t": "101 · Ahmed · Ali · 20-2-2008 · 11",
      "b": 1
     },
     {
      "t": "DateOfBirth",
      "b": 0
     },
     {
      "t": "All the information about Youssef",
      "b": 1
     }
    ],
    "why": "Columns are attributes (FirstName, DateOfBirth). Rows are complete records about one student."
   },
   {
    "type": "mc",
    "ctx": "Students table",
    "skill": "Apply",
    "q": "The Students table has 6 columns and 4 rows. How many student records does it hold?",
    "scene": "<span class=\"chip\" style=\"background:#1C9BEF\">6 columns</span><span class=\"chip\" style=\"background:#FF5D73\">4 rows</span>",
    "options": [
     "6",
     "4",
     "24",
     "10"
    ],
    "answer": 1,
    "why": "Each row is one record, so 4 rows = 4 student records. The 6 columns are the attributes."
   },
   {
    "type": "order",
    "ctx": "Smallest to biggest",
    "skill": "Understand",
    "seconds": 50,
    "q": "Order from smallest to biggest.",
    "sub": "Tap the tiles in order.",
    "tiles": [
     "Database",
     "Table",
     "One value (cell)",
     "Row (record)"
    ],
    "answer": [
     "One value (cell)",
     "Row (record)",
     "Table",
     "Database"
    ],
    "why": "A cell holds one value → a row is one record → a table holds many rows → a database holds many tables."
   },
   {
    "type": "mc",
    "ctx": "Data types",
    "skill": "Apply",
    "q": "Which data type should store a GPA like 3.75?",
    "options": [
     "INT",
     "VARCHAR(50)",
     "DECIMAL(3,2)",
     "BOOLEAN"
    ],
    "answer": 2,
    "why": "DECIMAL(3,2) stores 3 digits with 2 after the decimal point, like 3.75."
   },
   {
    "type": "bins",
    "ctx": "INT or VARCHAR",
    "skill": "Analyze",
    "seconds": 50,
    "q": "Which data type? Sort each column.",
    "bins": [
     "🔢 INT",
     "🔤 VARCHAR"
    ],
    "items": [
     {
      "t": "Age: 16",
      "b": 0
     },
     {
      "t": "PhoneNumber: '0551234567'",
      "b": 1
     },
     {
      "t": "FullName: 'Ali Ahmed'",
      "b": 1
     },
     {
      "t": "StudentID: 101",
      "b": 0
     }
    ],
    "why": "Whole numbers used in maths → INT. Names and phone numbers (not used in maths) → VARCHAR text."
   },
   {
    "type": "mc",
    "ctx": "Primary key",
    "skill": "Evaluate",
    "q": "Which is NOT a rule for a primary key?",
    "options": [
     "Unique",
     "Not null",
     "Can be duplicated",
     "Unchanging"
    ],
    "answer": 2,
    "why": "A primary key must be unique, not null, unchanging and single purpose. It can never be duplicated."
   },
   {
    "type": "line",
    "ctx": "Broken key",
    "skill": "Analyze",
    "q": "StudentID is the primary key. Tap the row that BREAKS the rule.",
    "code": [
     "StudentID | FirstName",
     "101       | Ahmed",
     "102       | Mohamed",
     "102       | Laila",
     "103       | Said"
    ],
    "answer": 3,
    "why": "102 already belongs to Mohamed. A primary key value can only appear once."
   },
   {
    "type": "mc",
    "ctx": "Foreign key",
    "skill": "Remember",
    "q": "A foreign key is a column that…",
    "options": [
     "refers to the primary key in another table",
     "must be unique in its own table",
     "can only store dates",
     "can never be empty"
    ],
    "answer": 0,
    "why": "A foreign key points to a primary key in another table. Unlike a primary key, it can repeat."
   },
   {
    "type": "mc",
    "ctx": "Orphans",
    "skill": "Analyze",
    "q": "Enrollments has StudentID 999, but there is no student 999. What is this called?",
    "options": [
     "A primary key",
     "An orphaned record",
     "A data type",
     "A new table"
    ],
    "answer": 1,
    "why": "A record without a valid connection is an orphaned record. Foreign keys prevent this."
   }
  ],
  "endHTML": "<div class=\"recap\"><div><b>Database + tables</b>Rows = records · columns = fields</div><div><b>Data types</b>INT · DECIMAL · VARCHAR · DATE · BOOLEAN</div><div><b>Keys</b>PK identifies · FK links tables</div></div>"
 }
};
