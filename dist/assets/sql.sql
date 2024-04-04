DROP 
  TABLE if exists Student;
CREATE TABLE if not exists Student (
  Sid INT PRIMARY KEY NOT NULL, Sname TEXT NOT NULL, 
  Sage INT2 NOT NULL, Ssex TEXT NOT NULL, 
  Sclass INT NOT NULL, Sdept INT2 NOT NULL, 
  Saddr TEXT
);
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114511, '张三', 20, '男', 20210101, 
    01, '北京路1号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114512, '李四', 21, '女', 20210102, 
    02, '上海路2号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114513, '王五', 19, '男', 20210103, 
    03, '广州路3号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114514, '赵六', 22, '女', 20210101, 
    01, '深圳路4号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114515, '孙七', 20, '男', 20210102, 
    02, '成都路5号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114516, '周八', 21, '女', 20210103, 
    03, '重庆路6号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114517, '吴九', 19, '男', 20210101, 
    01, '杭州路7号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114518, '郑十', 22, '女', 20210102, 
    02, '南京路8号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114519, '陈十一', 20, '男', 
    20210103, 03, '西安路9号'
  );
INSERT INTO Student (
  Sid, Sname, Sage, Ssex, Sclass, Sdept, 
  Saddr
) 
VALUES 
  (
    2021114520, '卫十二', 21, '女', 
    20210101, 01, '武汉路0号'
  );
