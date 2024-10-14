function showDetails(project) {
    let detailsContent = document.getElementById('details-content');
    
    // تفاصيل المشاريع (يمكنك تخصيص التفاصيل لكل مشروع)
    const details = {
        project1: "تفاصيل إضافية عن المشروع 1.",
        project2: "تفاصيل إضافية عن المشروع 2.",
        project3: "تفاصيل إضافية عن المشروع 3.",
        project4: "تفاصيل إضافية عن المشروع 4.",
        project5: "تفاصيل إضافية عن المشروع 5."
    };

    detailsContent.textContent = details[project];
    document.getElementById('project-details').style.display = 'block';
}

function hideDetails() {
    document.getElementById('project-details').style.display = 'none';
}
