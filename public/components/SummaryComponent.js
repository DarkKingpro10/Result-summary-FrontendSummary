/*Import the data to be used in the app*/
import data from "../assets/data/data.json";

export default function Summary() {
	let items = `
    <h2 class="font-extrabold mb-6 lg:mb-8">Summary</h2>
  `; //Variable a la que se le asignara el contenido de la lista

	data.map((item) => {
		items += `
      <article class="flex justify-between ${item["bg-color"]} h-[54px] rounded-lg p-4 items-center mb-3 lg:mb-5">
        <figure class="flex gap-3">
          <img src="${item.icon}" alt="${item.category} images">
          ${item.category}
        </figure>
        <span class="font-bold inline-block">100<span class="text-dark-gray-blue font-normal">/100</span> </span>
      </article>
    `;
	});

	items += `<button class="bg-dark-gray-blue text-white rounded-full p-3 w-full mt-5 hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue">Continue</button>`;

	return items;
}

/**Color styles for tailwind recognize */
const styles =[
  "bg-light-red-alpha",
  "bg-orangey-yellow-alpha",
  "bg-green-teal-alpha",
  "bg-cobalt-blue-alpha"
];