function CategoryList({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selectedCategory === cat ? "active" : ""}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;