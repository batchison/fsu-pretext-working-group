var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus   Welcome to what promises to be an exciting and fun semester of ...     Course Information  This is the syllabus for course name (MATH xxx, section xxx) for semester 20xx. It is a x credit course.   Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD   Important : I want to see you in student hours, and will happily make appointments with you outside of the regular hours. I'm also available by email and will respond within 24 hours, usually much sooner. There is little I enjoy more than discussing mathematics, so you are really doing me a favor by coming to see me.    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.      Course Overview       Assessments and Grades     Learning targets  By the end of this course, you should be able to:              Assessment of Learning Targets      Final Exam      Assessment of Mathematical Engagement  Your level of effort and engagement will be assessed through your participation in class and completion of a variety of homework assignments.   Participation      Daily Prep Assignments      Practice Problems      Written Homework         Final Grades        Course Policies   Attendance      Late work      Classroom Decorum      Academic Integrity      Generative AI      Title IX and Equal Opportunity       Important Dates     Friday, Aug 25  Last day to add a class    Monday, Sep 4  Labor Day (no classes)    Monday, Sep 8  Last day to drop a class    Nov 26 - Nov 28  Thanksgiving break (no classes Wednesday, Thursday or Friday)    Friday, Dec 5  Last day to withdraw from class and receive a W    Thursday, Dec 11  Final Exam from 10:45am to 1:15pm      "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
