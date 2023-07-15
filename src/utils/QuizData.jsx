import Word from "../assets/ms-word.png";
import Excel from "../assets/ms-excel.png";
import Powerpoint from "../assets/ms-powerpoint.png";

export const Logos = [
  { id: 1, title: "Word", img: Word },
  { id: 2, title: "Excel", img: Excel },
  { id: 3, title: "Powerpoint", img: Powerpoint },
];

export const ExamType = [
  {
    id: 1,
    title: "Pre-Test",
  },
  {
    id: 2,
    title: "Post-Test",
  },
];

export const QuizData = [
  {
    id: 1,
    category: "Excel",
    question:
      "Which function is used to sum the values in a range of cells in Excel?",
    options: ["SUM", "AVERAGE", "MAX", "COUNT"],
    answer: "SUM",
  },
  {
    id: 2,
    category: "Excel",
    question:
      "What is the keyboard shortcut to insert the current date in Excel?",
    options: ["Ctrl + D", "Ctrl + ;", "Ctrl + Shift + :", "Ctrl + Shift + D"],
    answer: "Ctrl + ;",
  },
  {
    id: 3,
    category: "Excel",
    question:
      "Which formula is used to find the highest value in a range of cells in Excel?",
    options: ["MAX", "MIN", "COUNT", "AVERAGE"],
    answer: "MAX",
  },
  {
    id: 4,
    category: "Excel",
    question:
      "Which chart type is best suited for comparing values across different categories in Excel?",
    options: ["Pie Chart", "Bar Chart", "Line Chart", "Scatter Chart"],
    answer: "Bar Chart",
  },
  {
    id: 5,
    category: "Excel",
    question:
      "What function is used to combine the contents of multiple cells into one cell in Excel?",
    options: ["SUM", "AVERAGE", "CONCATENATE", "COUNT"],
    answer: "CONCATENATE",
  },
  {
    id: 6,
    category: "Excel",
    question: "What is the shortcut key to select the entire column in Excel?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + A", "Ctrl + Space"],
    answer: "Ctrl + Space",
  },
  {
    id: 7,
    category: "Excel",
    question:
      "Which function is used to count the number of cells that meet a specific condition in Excel?",
    options: ["SUM", "AVERAGE", "MAX", "COUNTIF"],
    answer: "COUNTIF",
  },
  {
    id: 8,
    category: "Excel",
    question:
      "What is the function used to round a number down to the nearest integer in Excel?",
    options: ["ROUNDUP", "ROUNDDOWN", "ROUND", "FLOOR"],
    answer: "ROUNDDOWN",
  },
  {
    id: 9,
    category: "Excel",
    question:
      "Which keyboard shortcut is used to insert a new worksheet in Excel?",
    options: ["Ctrl + N", "Ctrl + W", "Ctrl + Shift + N", "Ctrl + Shift + W"],
    answer: "Ctrl + Shift + N",
  },
  {
    id: 10,
    category: "Excel",
    question:
      "Which function is used to find the average value in a range of cells in Excel?",
    options: ["SUM", "AVERAGE", "MAX", "COUNT"],
    answer: "AVERAGE",
  },
  // Word
  {
    id: 11,
    category: "Word",
    question: "How do you change the font style in Microsoft Word?",
    options: ["Bold", "Italic", "Underline", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 12,
    category: "Word",
    question: "Which feature is used to create a bulleted list in Word?",
    options: [
      "Numbered list",
      "Bullet points",
      "Indented list",
      "Paragraph formatting",
    ],
    answer: "Bullet points",
  },
  {
    id: 13,
    category: "Word",
    question: "What is the shortcut key to copy selected text in Word?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    answer: "Ctrl + C",
  },
  {
    id: 14,
    category: "Word",
    question: "How do you insert a page break in Word?",
    options: [
      "Press Enter key",
      "Press Ctrl + Enter",
      "Press Shift + Enter",
      "Insert Break option",
    ],
    answer: "Insert Break option",
  },
  {
    id: 15,
    category: "Word",
    question:
      "Which feature is used to align text to both the left and right margins in Word?",
    options: [
      "Left alignment",
      "Right alignment",
      "Center alignment",
      "Justify alignment",
    ],
    answer: "Justify alignment",
  },
  {
    id: 16,
    category: "Word",
    question: "What is the shortcut key to undo the last action in Word?",
    options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + S"],
    answer: "Ctrl + Z",
  },
  {
    id: 17,
    category: "Word",
    question: "How do you change the page orientation to landscape in Word?",
    options: [
      "Layout tab",
      "Page Setup dialog box",
      "Margins dialog box",
      "Paragraph dialog box",
    ],
    answer: "Page Setup dialog box",
  },
  {
    id: 18,
    category: "Word",
    question: "Which feature is used to insert a table in Word?",
    options: [
      "Insert Table option",
      "Table menu",
      "Layout tab",
      "Paragraph dialog box",
    ],
    answer: "Insert Table option",
  },
  {
    id: 19,
    category: "Word",
    question: "What is the shortcut key to save a Word document?",
    options: ["Ctrl + S", "Ctrl + C", "Ctrl + V", "Ctrl + X"],
    answer: "Ctrl + S",
  },
  {
    id: 20,
    category: "Word",
    question: "How do you insert a hyperlink in Word?",
    options: [
      "Insert Hyperlink option",
      "Right-click and select Hyperlink",
      "Ctrl + K",
      "All of the above",
    ],
    answer: "All of the above",
  },

  // PowerPoint
  {
    id: 21,
    category: "PowerPoint",
    question: "How do you add a new slide in PowerPoint?",
    options: [
      "Right-click and select 'New Slide'",
      "Press 'Ctrl + N'",
      "Click the 'New Slide' button",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 22,
    category: "PowerPoint",
    question: "What is the shortcut key to start a slideshow in PowerPoint?",
    options: ["F5", "Ctrl + S", "Alt + F4", "Ctrl + P"],
    answer: "F5",
  },
  {
    id: 23,
    category: "PowerPoint",
    question:
      "Which feature is used to apply predefined designs to slides in PowerPoint?",
    options: ["Templates", "Themes", "Animations", "Transitions"],
    answer: "Themes",
  },
  {
    id: 24,
    category: "PowerPoint",
    question: "How do you change the slide layout in PowerPoint?",
    options: [
      "Right-click and select 'Slide Layout'",
      "Go to Slide Master view",
      "Layout tab",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    id: 25,
    category: "PowerPoint",
    question:
      "What is the shortcut key to add a new shape to a slide in PowerPoint?",
    options: ["Ctrl + M", "Ctrl + N", "Ctrl + Shift + N", "Ctrl + Shift + M"],
    answer: "Ctrl + M",
  },
  {
    id: 26,
    category: "PowerPoint",
    question:
      "Which feature is used to add animation effects to objects in PowerPoint?",
    options: ["Animations", "Transitions", "Slide Show", "Design Ideas"],
    answer: "Animations",
  },
  {
    id: 27,
    category: "PowerPoint",
    question: "How do you add speaker notes to a slide in PowerPoint?",
    options: [
      "Click 'Notes' pane",
      "Insert a text box",
      "Right-click and select 'Speaker Notes'",
      "All of the above",
    ],
    answer: "Click 'Notes' pane",
  },
  {
    id: 28,
    category: "PowerPoint",
    question: "What is the shortcut key to preview a slide in PowerPoint?",
    options: ["Ctrl + P", "Ctrl + N", "Ctrl + F5", "Ctrl + F7"],
    answer: "Ctrl + F5",
  },
  {
    id: 29,
    category: "PowerPoint",
    question:
      "Which feature is used to record narration for a presentation in PowerPoint?",
    options: ["Slide Show", "Transitions", "Animations", "Audio"],
    answer: "Audio",
  },
  {
    id: 30,
    category: "PowerPoint",
    question: "What is the shortcut key to end a slideshow in PowerPoint?",
    options: ["Esc", "Ctrl + End", "Ctrl + Esc", "Shift + Esc"],
    answer: "Esc",
  },
];
