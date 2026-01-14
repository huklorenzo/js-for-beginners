let currentExercise = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderExerciseList();
    setupEventListeners();
});

// Render the list of exercises
function renderExerciseList() {
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = '';

    exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <h3>${exercise.title}</h3>
            <span class="difficulty ${exercise.difficulty}">${exercise.difficulty}</span>
            <p>${exercise.description.replace(/<[^>]*>/g, '').substring(0, 100)}...</p>
        `;
        card.addEventListener('click', () => openExercise(exercise.id));
        exerciseList.appendChild(card);
    });
}

// Open an exercise
function openExercise(exerciseId) {
    currentExercise = exercises.find(ex => ex.id === exerciseId);
    
    document.getElementById('exerciseList').style.display = 'none';
    document.getElementById('exerciseView').style.display = 'block';
    
    document.getElementById('exerciseTitle').textContent = currentExercise.title;
    document.getElementById('exerciseDescription').innerHTML = currentExercise.description;
    document.getElementById('codeEditor').value = currentExercise.starterCode;
    document.getElementById('output').textContent = '';
    document.getElementById('output').className = 'output';
    document.getElementById('hintContainer').style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('backBtn').addEventListener('click', () => {
        document.getElementById('exerciseList').style.display = 'grid';
        document.getElementById('exerciseView').style.display = 'none';
        currentExercise = null;
    });

    document.getElementById('runBtn').addEventListener('click', runCode);
    document.getElementById('hintBtn').addEventListener('click', showHint);
    document.getElementById('solutionBtn').addEventListener('click', showSolution);
    document.getElementById('resetBtn').addEventListener('click', resetCode);
}

// Run the code
async function runCode() {
    if (!currentExercise) return;

    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('output');
    
    // Capture console.log output
    const outputLines = [];
    const originalLog = console.log;
    console.log = (...args) => {
        outputLines.push(args.map(arg => {
            if (typeof arg === 'object') {
                return JSON.stringify(arg, null, 2);
            }
            return String(arg);
        }).join(' '));
    };

    // Show loading state for async operations
    output.textContent = 'Running...';
    output.className = 'output';

    try {
        // Clear previous output
        outputLines.length = 0;
        
        // Wrap code in async function to handle async/await
        const wrappedCode = `
            (async () => {
                ${code}
            })();
        `;
        
        // Execute the code
        await eval(wrappedCode);
        
        // Wait a bit for any async operations to complete
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Display output
        if (outputLines.length === 0) {
            output.textContent = 'No output. Try using console.log() to print something!';
            output.className = 'output';
        } else {
            output.textContent = outputLines.join('\n');
            
            // Check if exercise has a test function and if it passes
            if (currentExercise.test) {
                const passed = await currentExercise.test(code);
                if (passed) {
                    output.className = 'output success';
                    output.textContent += '\n\n✅ Great job! Your code works correctly!';
                } else {
                    output.className = 'output';
                }
            } else {
                output.className = 'output';
            }
        }
    } catch (error) {
        output.textContent = `Error: ${error.message}\n\n${error.stack}`;
        output.className = 'output error';
    } finally {
        // Restore original console.log
        console.log = originalLog;
    }
}

// Show hint
function showHint() {
    if (!currentExercise) return;
    
    const hintContainer = document.getElementById('hintContainer');
    const hintContent = document.getElementById('hintContent');
    
    hintContent.textContent = currentExercise.hint;
    hintContainer.style.display = 'block';
}

// Show solution
function showSolution() {
    if (!currentExercise) return;
    
    if (confirm('Are you sure you want to see the solution?')) {
        document.getElementById('codeEditor').value = currentExercise.solution;
        runCode();
    }
}

// Reset code
function resetCode() {
    if (!currentExercise) return;
    
    if (confirm('Are you sure you want to reset your code?')) {
        document.getElementById('codeEditor').value = currentExercise.starterCode;
        document.getElementById('output').textContent = '';
        document.getElementById('output').className = 'output';
        document.getElementById('hintContainer').style.display = 'none';
    }
}
