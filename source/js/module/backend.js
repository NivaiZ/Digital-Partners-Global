const getDataHandler = async () => {
  const heading = document.querySelector('.page-main__heading');

  try {
    const res = await fetch('https://63e20d563e12b1937636ae82.mockapi.io/API');
    const data = await res.json();
    console.warn(data);

    for (const key in data) {
      heading.innerHTML += `
      <p class="test">${data[key].numberrange}</p>
      `
    }
  } catch (error) {
    alert('Не удалось получить данные')
  }

}

document.addEventListener('DOMContentLoaded', getDataHandler);
