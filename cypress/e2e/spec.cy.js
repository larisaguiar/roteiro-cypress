describe('TODOMvc App', () => {
  it('Verifica se app está abrindo', () => {
    cy.visit('')
  })

  it('Insere uma tarefa', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1) 
      .first()
      .should('have.text', 'TP2 de Engenharia de Software'); 
  });

  it('Insere e deleta uma tarefa', () => {
    cy.visit('');

    cy.get('[data-cy=todo-input]')
      .type('TP2 de Engenharia de Software{enter}');

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1);

    cy.get('[data-cy=todos-list] > li [data-cy=remove-todo-btn]')
      .invoke('show')
      .click();

    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 0);
  });

  it('Filtra tarefas completas e ativas', () => {
    cy.visit(''); 

    cy.get('[data-cy=todo-input]')
      .type('TP2 de ES{enter}')
      .type('Prova de ES{enter}');

    cy.get('[data-cy=todos-list] > li [data-cy=toggle-todo-checkbox]')
      .first()
      .click();

    cy.get('[data-cy=filter-active-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'Prova de ES');

    cy.get('[data-cy=filter-completed-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 1)
      .first()
      .should('have.text', 'TP2 de ES');

    cy.get('[data-cy=filter-all-link')
      .click();
    cy.get('[data-cy=todos-list]')
      .children()
      .should('have.length', 2);
  });
  it('Edita uma tarefa ', () => {
    cy.visit('');
  
    cy.get('.new-todo')
      .type('TP2 de Engenharia de Software{enter}');
  
    cy.get('.todo-list li')
      .dblclick();
  
    cy.get('.todo-list li.editing .edit')
      .clear()
      .type('TP2 de ES atualizado{enter}');
  
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'TP2 de ES atualizado');
  });
  
  
  it('Tarefas pendentes', () => {
    cy.visit('');
  
    cy.get('.new-todo')
      .type('TP2 de Engenharia de Software{enter}')
      .type('Prova de Engenharia de Software{enter}');
  
    cy.get('.todo-count')
      .should('contain', '2 items left');
  
    cy.get('.todo-list li .toggle')
      .first()
      .click();
  
    cy.get('.todo-count')
      .should('contain', '1 item left');
  });
  
  it('Lista vazia', () => {
    cy.visit('');
  
    cy.get('.todo-list li')
      .should('have.length', 0);
  
    cy.get('.new-todo')
      .type('TP2 de Engenharia de Software{enter}');
  
    cy.get('.todo-list li')
      .should('have.length', 1);
  });
  
});