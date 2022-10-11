


export const LoadData = async () => {
    const collectData = await fetch('https://openapi.programming-hero.com/api/quiz');

    const data = collectData.json();

    return data;
}