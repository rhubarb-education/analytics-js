enum SlideAction {
  Next = 'NEXT_SLIDE',
  Previous = 'PREVIOUS_SLIDE',
  Goto = 'GOTO_SLIDE',
}

enum ModuleAction {
  Complete = 'COMPLETE_MODULE',
  Final = 'FINAL_SLIDE',
}

const ApiAction = {
  ...ModuleAction,
  ...SlideAction,
};

export type ApiAction = ModuleAction | SlideAction;
