export function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'At vero eos et accusamus et',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        },
        {
          id: 2,
          content: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        },
        {
          id: 3,
          content: 'At vero eos et accusamus et iusto odio',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        },
        {
          id: 4,
          content: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        },
        {
          id: 5,
          content: 'At vero eos et accusamus',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        },
      ]
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'At vero eos et accusamus',
          labels: [],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        }
      ]
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
          labels: ['#7159c1'],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        },
        {
          id: 8,
          content: 'At vero eos et accusamus et',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/24769178?s=460&v=4'
        },
        {
          id: 9,
          content: 'At vero eos et accusamus et iusto',
          labels: [],
        }
      ]
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
          labels: [],
        },
        {
          id: 12,
          content: 'At vero eos et accusamus et iusto',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'At vero eos et accusamus et iusto odio dignissimos ducimus At vero eos et accusamus et iusto odio',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}
