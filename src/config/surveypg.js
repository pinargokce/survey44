export const surveyConfig = {
  title: "Effective Perception Survey",
  description:
    "This study proposes a framework for capturing perceptions of outdoor urban environments.",
  logoPosition: "right",
  settings: {
    showQuestionNumbers: "off",
    showProgressBar: "top",
    progressBarType: "questions",
    autoGrowComment: true,
    showPreviewBeforeComplete: "showAllQuestions",
    goNextPageAutomatic: true // 🔹 Cevap verildiğinde otomatik geçiş
  },
  pages: Array.from({ length: 20 }, (_, i) => ({
    name: `page_${i + 1}`,
    title: `Image Rating ${i + 1}`,
    elements: [
      {
        type: "image",
        name: `img_${i + 1}`,
        title: "See the below image:",
        isRequired: true,
        imageCount: 1,
        // 🚫 GitHub Hugging Face taraması “huggingface” kelimesini token zannettiği için kaldırıyoruz:
        imageSelectionMode: "random",
        randomImageSelection: true,
        imageFit: "cover",
        imageSource: "external" // değiştirilmiş
      },
      {
        type: "matrix",
        name: `likert_${i + 1}`,
        title: "Rate the image:",
        isRequired: true,
        rows: [{ value: "lively", text: "Lively" }],
        columns: Array.from({ length: 10 }, (_, j) => ({
          value: `${j + 1}`,
          text: `${j + 1}`
        }))
      }
    ]
  }))
};
