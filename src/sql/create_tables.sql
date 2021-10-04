CREATE TABLE inventory (
	ID AUTO_INCREMENT NOT NULL,
	category varchar(20),
	manufactuer varchar(20),
	item_name varchar(50),
	stock integer,
	reserved integer,
	on_order integer,
	min_stock integer,
	cost float,
	price float,
	notes varchar(250),
	PRIMARY KEY (ID)
);
