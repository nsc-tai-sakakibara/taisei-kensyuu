-- SQLite
SELECT Name FROM artists;

SELECT * FROM artists WHERE name="Aerosmith";

--カラム　LIKE　検索のパターン
--% %とにかく中身の文字があるもの
SELECT * FROM artists WHERE name LIKE "Aer%";

--個数制限
SELECT Name AS "アーティスト", ArtistId FROM artists LIMIT 50;

--ORDER BY 並び替え　昇順
SELECT * FROM artists ORDER BY name;

--ASC昇順 DESC降順
SELECT * FROM artists ORDER BY name DESC, ArtistsId ASC;

--WHERE カラム　BETWEEN 最低値　AND  最大値 指定した値の間のデータを取ってくる
SELECT * FROM artists WHERE ArtistsId BETWEEN 10 AND 15;

--SQL JOIN 二つ以上のテーブルに検索をかける
--FROM ? が基準　JOIN テーブル名　WHERE 元のテーブル.カラム＝テーブル名.カラム
SELECT Title,Name FROM albums
JOIN artists
WHERE albums.ArtistId = artists.ArtistId
ORDER BY Name;

SELECT Title FROM albums
JOIN artists
WHERE albums.ArtistId = artists.ArtistId
AND artists.Name = "AC/DC"
ORDER BY Name;

SELECT * FROM tracks AS tk
JOIN albums AS al
JOIN media_types AS mt
JOIN genres AS gen
WHERE tk.AlbumId=al.AlbumId
AND tk.MediaTypeId=mt.MediaTypeId
AND tk.GenreId=gen.GenreId


--メディアタイプが"AAC audio file"の曲をリストアップしてください
--表示するデータは、　TrackId　tracks.Name
SELECT TrackId,tracks.Name FROM tracks
JOIN media_types
WHERE media_types.MediaTypeId=tracks.MediaTypeId
AND media_types.Name = "AAC audio file";


--アーティストIDが84のアーティストの曲をリストアップしてください
--表示するデータは　tracks.Name, albums.Title
SELECT tracks.Name,albums.Title FROM tracks
JOIN albums
WHERE tracks.AlbumId = albums.AlbumId
AND albums.ArtistId = 84;


--PlaylistId 11 の曲名をリストアップしてください
--表示するデータは　tracks.Name
SELECT tracks.Name FROM tracks
JOIN playlist_track
WHERE playlist_track.TrackId = tracks.TrackId
AND playlist_track.PlaylistId = 11;
