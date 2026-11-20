export default function ArticleCard({ article }) {
  return (
    <article className="carte">
      <h3>{article.title}</h3>
      <p>{article.body.slice(0, 100)}…</p>
    </article>
  );
}