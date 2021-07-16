enum SlideAction {
    Next = 'NEXT_SLIDE',
    Previous = 'PREVIOUS_SLIDE',
    Goto = 'GOTO_SLIDE'
}

enum ModuleAction {
    CompleteModule = 'COMPLETE_MODULE',
    FinalSlide = 'FINAL_SLIDE',
}

const ApiAction = {
   ...ModuleAction,
   ...SlideAction,
}

type ApiAction = ModuleAction | SlideAction