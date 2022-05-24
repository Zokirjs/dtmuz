class User {
  data = [
    {
      class: 11,
      subjects: ['Matematika', 'Fizika', 'Ingiliz tili'],
      limit: 65,
    },
    {
      class: 10,
      subjects: ['Matematika', 'Fizika', 'Ingiliz tili'],
      limit: 65,
    },
    {
      class: 9,
      subjects: ['Matematika', 'Fizika', 'Ingiliz tili'],
      limit: 65,
    },
    {
      class: 8,
      subjects: ['Matematika', 'Fizika', 'Ingiliz tili'],
      limit: 65,
    },
    {
      class: 7,
      subjects: ['Matematika', 'Fizika', 'Ingiliz tili'],
      limit: 65,
    },
    {
      class: 6,
      subjects: ['Matematika', 'Fizika', 'Ingiliz tili'],
      limit: 65,
    },
    {
      class: 5,
      subjects: ['Matematika', 'Ingiliz tili'],
      limit: 45,
    },
  ];

  getAnswers(limit_, json) {
    let answers_ = [];
    for (let i = 0; i < limit_; i++) {
      answers_.push(json[i + 3]);
    }
    return answers_;
  }

  getKeys(limit_, json) {
    let keys_ = [];
    for (let i = 0; i < limit_; i++) {
      keys_.push(
        json[
          i +
            5 +
            this.data.find((el) => el.class == this.class_.split('-')[0])
              .subjects.length +
            limit_
        ]
      );
    }
    return keys_;
  }
  getVariant(limit_, json) {
    return json[limit_ + 3];
  }

  getPoint(limit_, json) {
    return json[
      limit_ +
        4 +
        this.data.find((el) => el.class == this.class_.split('-')[0]).subjects
          .length
    ];
  }

  getSubjects(limit_, json) {
    let subjects_ = [];
    let x = 4;
    for (let i of this.data.find((el) => el.class == this.class_.split('-')[0])
      .subjects) {
      subjects_.push({
        name: i,
        point: json[limit_ + x++],
      });
    }
    return subjects_;
  }

  constructor(json) {
    this.id = json[0];
    this.name = json[1];
    this.class_ = json[2];
    this.limit = this.data.find(
      (el) => el.class == this.class_.split('-')[0]
    ).limit;
    this.points = this.getPoint(
      this.data.find((el) => el.class == this.class_.split('-')[0]).limit,
      json
    );
    this.varaint = this.getVariant(
      this.data.find((el) => el.class == this.class_.split('-')[0]).limit,
      json
    );
    this.subjects = this.getSubjects(
      this.data.find((el) => el.class == this.class_.split('-')[0]).limit,
      json
    );
    this.answers = this.getAnswers(
      this.data.find((el) => el.class == this.class_.split('-')[0]).limit,
      json
    );
    this.keys = this.getKeys(
      this.data.find((el) => el.class == this.class_.split('-')[0]).limit,
      json
    );
  }
}

module.exports = User;
