import prices from "../content/pricing.json";

export default function Home() {
  return (
    <ul>
      {prices.map((price) => (
        <li key={price.key}>
          {price.title}: {price.price}
        </li>
      ))}
    </ul>
  );
}
