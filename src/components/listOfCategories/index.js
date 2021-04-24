import React, { useEffect, useState } from "react";
import { Category } from "../Category/index";
import { Item, List } from "./styles";
// import { categories as mockCategories } from '../../../api/db.json'

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchPostCards(url) {
    setLoading(true);
    console.log("corro esta funcion fetchPOstcards");
    const res = await window.fetch(url);
    const data = await res.json();
    setCategories(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchPostCards("http://localhost:3500/categories");
  }, []);
  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <>
          <Item key="loading">
            {" "}
            <Category />{" "}
          </Item>
        </>
      ) : (
        <>
          {categories.length > 0 &&
            categories.map((category) => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`}  />
              </Item>
            ))}
        </>
      )}
    </List>
  );
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
