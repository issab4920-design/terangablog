import ArticleCard from "../components/ArticleCard";
import { articles } from "../donnees-test";

export default function Accueil() {
  return (
    <section>
      <h1>Derniers articles</h1>
      <ArticleCard article={articles[0]} />
      <ArticleCard article={articles[1]} />
      <ArticleCard article={articles[2]} />
    </section>
  );
}