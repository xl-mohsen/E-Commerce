import CollectionItem from "../collection-item/collectionItem";
import "./collectionPreview.style.scss";

export default function CollectionPreview({ title, items }) {
  return (
    <>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items.filter((itmes , index) => index < 4).map((item) => (
            <CollectionItem key={item.id} item = {item} />
          ))}
        </div>
      </div>
    </>
  );
}
