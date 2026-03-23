class Analytics {
    constructor() {
        this.events = [];
    }

    lesson_started() {
        this.events.push({event: 'lesson_started', timestamp: new Date()});
    }

    exam_submitted() {
        this.events.push({event: 'exam_submitted', timestamp: new Date()});
    }

    practice_question_answered() {
        this.events.push({event: 'practice_question_answered', timestamp: new Date()});
    }

    exportData() {
        return this.events;
    }
}

// Example usage:
const analytics = new Analytics();

// Call these methods on the respective events
// analytics.lesson_started();
// analytics.exam_submitted();
// analytics.practice_question_answered();

// Export for ML model training
// const trainingData = analytics.exportData();