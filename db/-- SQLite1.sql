-- SQLite
--NULL  何もない
--INTEGER	整数
--REAL  小数点
--TEXT  文字列
--BLOB  データそのもの

-- CREATE TABLE テーブル名(保存したいデータとデータ名)
CREATE TABLE IF NOT EXISTS user(
    name TEXT,
    email TEXT,
    password TEXT
);

--テーブルの削除
--DROP TABLE テーブル名g
DROP TABLE user;

--テーブルの更新
--ALTER TABLE テーブル名
--テーブル名を変更したいとき　RENAME TO 新しいテーブル名
--テーブルのカラム変更　RENAME COLUMN 変更したいカラム　TO 新しいカラム
--テーブルにカラムを追加する　ADD COLUMN カラムの定義(カラム名　データタイプ)
ALTER TABLE user ADD COLUMN id INTEGER;

--データを入れる
--INSERT INTO テーブル名（どのカラムに入れたいか）VALUES（入れたい値）
INSERT INTO user(name,email,password)VALUES(
    "A",
    "B",
    "C"
);

INSERT INTO user VALUES(
    "d",
    "e",
    "f"
);

CREATE TABLE test(
    id INTEGER,
    name TEXT,
    price REAL
);

ALTER TABLE test RENAME TO product;

ALTER TABLE product ADD COLUMN test BLOB;

ALTER TABLE product RENAME COLUMN test TO image;

DROP TABLE product;
DROP TABLE test;
