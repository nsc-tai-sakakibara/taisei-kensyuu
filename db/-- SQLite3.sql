-- SQLite

--商品
CREATE TABLE IF NOT EXISTS product(
    id INTEGER PRIMARY KEY,
    price REAL,
    amount INTEGER
);

--在庫
CREATE TABLE IF NOT EXISTS stock(
    product_id INTEGER,
    stock_count INTEGER,
    FOREIGN KEY(product_id) REFERENCES product(id)
);

--カート
CREATE TABLE IF NOT EXISTS cart(
    id INTEGER PRIMARY KEY,
    date TEXT
);

--カート商品
CREATE TABLE IF NOT EXISTS cart_product(
    cart_id INTEGER,
    product_id INTEGER,
    count INTEGER,
    FOREIGN KEY (cart_id) REFERENCES cart(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);


--1:1 の場合はFOREIGN KEYはどちらかのテーブルにつける
--1:N の場合は1の方のテーブルにFOREIGN
--N:N の場合はテーブルを新たに1つ作って、作ったテーブルにFOREIGN KEYをつける

INSERT INTO stock VALUES (1,100),(2,50),(3,200),(4,200);

INSERT INTO cart VALUES (1,"2020/4/23");

INSERT INTO cart_product VALUES (1,2,3),(1,3,2),(1,1,1);

DROP TABLE stock;



