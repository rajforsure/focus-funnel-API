function generateSteps(task) {
  const lowerTask = task.toLowerCase();

  if (lowerTask.includes("portfolio")) {
    return [
      "Decide tech stack",
      "Design layout",
      "Setup repo",
      "Build homepage",
      "Add content",
      "Make it responsive",
      "Deploy it"
    ];
  }

  if (lowerTask.includes("study")) {
    return [
      "List topics",
      "Split by days",
      "Take notes",
      "Practice questions",
      "Revise",
      "Mock test"
    ];
  }

  return [
    "Understand task",
    "Split into parts",
    "Set goals",
    "Track progress",
    "Finish and review"
  ];
}

module.exports = generateSteps;
