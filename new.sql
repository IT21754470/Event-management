create table emp_system.job1(
	jid int NOT NULL AUTO_INCREMENT,
    title varchar(25),
    description varchar(200),
    start_date date,
    end_date date,
    constraint pk_job primary key(jid)
);
