-- SQLite
CREATE TABLE IF NOT EXISTS product(
    id INTEGER PRIMARY KEY,
    name TEXT,
    price REAL,
    amount INTEGER
);


INSERT INTO product(id,name,price,amount) VALUES(
    1,
    "チョコレート",
    95,
    100
);

INSERT INTO product(id,name,price,amount) VALUES(
    2,
    "リンゴ",
    120,
    100
);

INSERT INTO product(id,name,price,amount) VALUES(
    3,
    "ジュース",
    150,
    100
),(
    4,
    "グミ",
    108,
    100
);

--テーブルからデータを削除する
--DELETE FROM テーブル名　WHERE 条件
DELETE FROM product WHERE id=2 --AND name="リンゴ"　AND price=120 AND amount=100;

--テーブルのデータ更新
--UPDATE テーブル名　SET　カラム名　＝値 WHERE 条件
UPDATE product SET amount = 50;--WHERE がないとすべてのデータに反映
UPDATE product SET name="コグミ"WHERE id=4;

--テーブルからデータを取得する
--SELECT 取得したいカラム　FROM　テーブル名　[WHERE 条件]
SELECT*FROM product; --*はテーブルすべての要素
SELECT name,price FROM product;
SELECT name FROM product WHERE price > 100;

DROP TABLE product