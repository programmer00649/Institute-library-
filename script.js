// الكائنات الرئيسية في DOM
const booksGrid = document.getElementById('books-grid');
const searchInput = document.getElementById('search-input');
const bookModal = document.getElementById('book-modal');
const closeButton = document.querySelector('.close-button');
const modalBookDetails = document.getElementById('modal-book-details');

// هيكل البيانات
const departments = {
  "مساعد طبيب": {
    "السنة الأولى": {
      "الفصل الأول": {
        "التشريح": [],
        "علم وظائف الأعضاء": [],
        "الكيمياء الحيوية": [],
        "مقدمة في الطب": []
      },
      "الفصل الثاني": {
        "علم الأمراض": [],
        "علم الأدوية": [],
        "المهارات السريرية": []
      }
    },
    "السنة الثانية": {
      "الفصل الأول": {
        "الطب الباطني": [],
        "الجراحة العامة": [],
        "طب الأطفال": []
      },
      "الفصل الثاني": {
        "النساء والتوليد": [],
        "الطوارئ": [],
        "الصحة العامة": []
      }
    },
    "السنة الثالثة": {
      "الفصل الأول": {
        "التدريب السريري": [],
        "إدارة المرافق الصحية": [],
        "البحث العلمي": []
      },
      "الفصل الثاني": {
        "التدريب الميداني": [],
        "مشروع التخرج": [],
        "أخلاقيات المهنة": []
      }
    }
  },
  "تمريض": {
    "السنة الأولى": {
      "الفصل الأول": {
        "أساسيات التمريض": [],
        "علم التشريح": [],
        "علم الأحياء": []
      },
      "الفصل الثاني": {
        "المهارات السريرية": [],
        "الرعاية الصحية": [],
        "علم النفس": []
      }
    },
    "السنة الثانية": {
      "الفصل الأول": {
        "تمريض باطني": [],
        "تمريض جراحي": [],
        "تمريض أطفال": []
      },
      "الفصل الثاني": {
        "تمريض نساء وولادة": [],
        "الإسعافات الأولية": [],
        "الصحة النفسية": []
      }
    },
    "السنة الثالثة": {
      "الفصل الأول": {
        "التدريب السريري": [],
        "إدارة التمريض": [],
        "البحث العلمي": []
      },
      "الفصل الثاني": {
        "التدريب الميداني": [],
        "مشروع التخرج": [],
        "أخلاقيات المهنة": []
      }
    }
  },
  "قابلات تقني": {
    "السنة الأولى": {
      "الفصل الأول": {
        "التقنيات الحديثة": [],
        "التوليد المتقدم": [],
        "رعاية الحمل": []
      },
      "الفصل الثاني": {
        "التدخلات الطبية": [],
        "العمليات القيصرية": [],
        "رعاية المواليد": []
      }
    },
    "السنة الثانية": {
      "الفصل الأول": {
        "التقنيات التشخيصية": [],
        "طب الأجنة": [],
        "علم الأدوية": []
      },
      "الفصل الثاني": {
        "التدريب السريري": [],
        "إدارة الولادة": [],
        "مشروع التخرج": []
      }
    },
    "السنة الثالثة": {
      "الفصل الأول": {
        "التخصص السريري": [],
        "البحث العلمي": [],
        "إدارة الوحدات": []
      },
      "الفصل الثاني": {
        "التدريب الميداني": [],
        "مشروع التخرج": [],
        "أخلاقيات المهنة": []
      }
    }
  },
  "قابلات مجتمع": {
    "السنة الأولى": {
      "الفصل الأول": {
        "أساسيات القبالة": [],
        "صحة المجتمع": [],
        "التثقيف الصحي": []
      },
      "الفصل الثاني": {
        "رعاية الحوامل": [],
        "تنظيم الأسرة": [],
        "التغذية": []
      }
    },
    "السنة الثانية": {
      "الفصل الأول": {
        "رعاية ما قبل الولادة": [],
        "رعاية ما بعد الولادة": [],
        "صحة الأم": []
      },
      "الفصل الثاني": {
        "التدريب الميداني": [],
        "التوعية المجتمعية": [],
        "مشروع التخرج": []
      }
    },
    "السنة الثالثة": {
      "الفصل الأول": {
        "الرعاية المتقدمة": [],
        "صحة المجتمع المتقدمة": [],
        "إدارة البرامج": []
      },
      "الفصل الثاني": {
        "التدريب الميداني": [],
        "مشروع التخرج": [],
        "القيادة والإدارة": []
      }
    }
  }
};

// قائمة الكتب
const books = [
  {
    id: "1",
    department: "مساعد طبيب",
    year: "السنة الأولى",
    semester: "الفصل الأول",
    subject: "التشريح",
    title: "التشريح العام",
    author: "د. أمين ناشر",
    description: "كتاب شامل في التشريح العام للجسم البشري.",
    coverImage: "books/medical_assistant/year1/semester1/anatomy/covers/anatomy.jpg",
    filePath: "books/medical_assistant/year1/semester1/anatomy/pdf/anatomy.pdf"
  },
  {
    id: "2",
    department: "تمريض",
    year: "السنة الأولى",
    semester: "الفصل الأول",
    subject: "أساسيات التمريض",
    title: "مبادئ التمريض الأساسية",
    author: "د. محمد علي",
    description: "كتاب يشرح المبادئ الأساسية في التمريض.",
    coverImage: "books/nursing/year1/semester1/basics/covers/basics.jpg",
    filePath: "books/nursing/year1/semester1/basics/pdf/basics.pdf"
  }
];

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  displayDepartments();
  initializeFilters();

  searchInput.addEventListener('input', handleSearch);
  closeButton.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === bookModal) {
      closeModal();
    }
  });
});

// عرض التخصصات
function displayDepartments() {
  booksGrid.innerHTML = '';
  const departmentsContainer = document.createElement('div');
  departmentsContainer.className = 'departments-container';

  for (const deptName in departments) {
    const deptCard = document.createElement('div');
    deptCard.className = 'department-card';
    deptCard.innerHTML = `<h2>${deptName}</h2>`;
    deptCard.addEventListener('click', () => displayYears(deptName));
    departmentsContainer.appendChild(deptCard);
  }

  booksGrid.appendChild(departmentsContainer);
}

// عرض السنوات الدراسية
function displayYears(department) {
  booksGrid.innerHTML = '';
  const yearsContainer = document.createElement('div');
  yearsContainer.className = 'years-container';

  const backBtn = createBackButton(() => displayDepartments());
  booksGrid.appendChild(backBtn);

  const deptTitle = document.createElement('h2');
  deptTitle.className = 'section-title';
  deptTitle.textContent = department;
  booksGrid.appendChild(deptTitle);

  for (const yearName in departments[department]) {
    const yearCard = document.createElement('div');
    yearCard.className = 'year-card';
    yearCard.innerHTML = `<h3>${yearName}</h3>`;
    yearCard.addEventListener('click', () => displaySemesters(department, yearName));
    yearsContainer.appendChild(yearCard);
  }

  booksGrid.appendChild(yearsContainer);
}

// عرض الفصول الدراسية
function displaySemesters(department, year) {
  booksGrid.innerHTML = '';
  const semestersContainer = document.createElement('div');
  semestersContainer.className = 'semesters-container';

  const backBtn = createBackButton(() => displayYears(department));
  booksGrid.appendChild(backBtn);

  const titles = document.createElement('div');
  titles.className = 'section-titles';
  titles.innerHTML = `
    <h2>${department}</h2>
    <h3>${year}</h3>
  `;
  booksGrid.appendChild(titles);

  for (const semesterName in departments[department][year]) {
    const semesterCard = document.createElement('div');
    semesterCard.className = 'semester-card';
    semesterCard.innerHTML = `<h3>${semesterName}</h3>`;
    semesterCard.addEventListener('click', () => displaySubjects(department, year, semesterName));
    semestersContainer.appendChild(semesterCard);
  }

  booksGrid.appendChild(semestersContainer);
}

// عرض المواد
function displaySubjects(department, year, semester) {
  booksGrid.innerHTML = '';
  const subjectsContainer = document.createElement('div');
  subjectsContainer.className = 'subjects-container';

  const backBtn = createBackButton(() => displaySemesters(department, year));
  booksGrid.appendChild(backBtn);

  const titles = document.createElement('div');
  titles.className = 'section-titles';
  titles.innerHTML = `
    <h2>${department}</h2>
    <h3>${year}</h3>
    <h4>${semester}</h4>
  `;
  booksGrid.appendChild(titles);

  for (const subjectName in departments[department][year][semester]) {
    const subjectCard = document.createElement('div');
    subjectCard.className = 'subject-card';
    subjectCard.innerHTML = `<h4>${subjectName}</h4>`;
    subjectCard.addEventListener('click', () => displayBooks(department, year, semester, subjectName));
    subjectsContainer.appendChild(subjectCard);
  }

  booksGrid.appendChild(subjectsContainer);
}

// عرض الكتب
function displayBooks(department, year, semester, subject) {
  booksGrid.innerHTML = '';
  const booksContainer = document.createElement('div');
  booksContainer.className = 'books-container-grid';

  const backBtn = createBackButton(() => displaySubjects(department, year, semester));
  booksGrid.appendChild(backBtn);

  const titles = document.createElement('div');
  titles.className = 'section-titles';
  titles.innerHTML = `
    <h2>${department}</h2>
    <h3>${year}</h3>
    <h4>${semester} - ${subject}</h4>
  `;
  booksGrid.appendChild(titles);

  const subjectBooks = departments[department][year][semester][subject];

  if (subjectBooks.length === 0) {
    const noBooks = document.createElement('p');
    noBooks.className = 'no-books';
    noBooks.textContent = 'لا توجد كتب متاحة حالياً لهذه المادة.';
    booksContainer.appendChild(noBooks);
  } else {
    subjectBooks.forEach(book => {
      const bookCard = createBookCard(book);
      booksContainer.appendChild(bookCard);
    });
  }

  booksGrid.appendChild(booksContainer);
}

// إنشاء بطاقة كتاب
function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.dataset.id = book.id;

  const coverSrc = book.coverImage || 'https://via.placeholder.com/150x200?text=كتاب';

  bookCard.innerHTML = `
    <div class="book-cover">
      <img src="${coverSrc}" alt="${book.title}">
    </div>
    <div class="book-info">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
    </div>
  `;

  bookCard.addEventListener('click', () => openBookDetails(book));
  return bookCard;
}

// إنشاء زر العودة
function createBackButton(onClick) {
  const backBtn = document.createElement('button');
  backBtn.className = 'back-button';
  backBtn.innerHTML = '&larr; عودة';
  backBtn.addEventListener('click', onClick);
  return backBtn;
}

// فتح تفاصيل الكتاب
function openBookDetails(book) {
  modalBookDetails.innerHTML = `
    <div class="modal-book-cover">
      <img src="${book.coverImage || 'https://via.placeholder.com/300x400?text=كتاب'}" alt="${book.title}">
    </div>
    <h2 class="modal-book-title">${book.title}</h2>
    <h3 class="modal-book-author">المؤلف: ${book.author}</h3>
    <p class="modal-book-description">${book.description || 'لا يوجد وصف متاح.'}</p>
    <a href="${book.filePath}" download class="download-button">تحميل الكتاب</a>
  `;

  bookModal.style.display = 'block';
}

// إغلاق النافذة المنبثقة
function closeModal() {
  bookModal.style.display = 'none';
}

// البحث
// تهيئة الفلاتر
function initializeFilters() {
  const departmentFilter = document.getElementById('department-filter');
  const yearFilter = document.getElementById('year-filter');
  const semesterFilter = document.getElementById('semester-filter');
  const subjectFilter = document.getElementById('subject-filter');

  // إضافة الأقسام مع تأخير بسيط للتأثير البصري
  setTimeout(() => {
    Object.keys(departments).forEach((dept, index) => {
      setTimeout(() => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        departmentFilter.appendChild(option);
      }, index * 100);
    });
  }, 300);

  // مستمعي الأحداث للفلاتر
  departmentFilter.addEventListener('change', () => {
    yearFilter.innerHTML = '<option value="">السنة الدراسية</option>';
    semesterFilter.innerHTML = '<option value="">الفصل الدراسي</option>';
    subjectFilter.innerHTML = '<option value="">المادة</option>';
    
    if (departmentFilter.value) {
      yearFilter.disabled = false;
      Object.keys(departments[departmentFilter.value]).forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
      });
    } else {
      yearFilter.disabled = true;
      semesterFilter.disabled = true;
      subjectFilter.disabled = true;
    }
    handleSearch();
  });

  yearFilter.addEventListener('change', () => {
    semesterFilter.innerHTML = '<option value="">الفصل الدراسي</option>';
    subjectFilter.innerHTML = '<option value="">المادة</option>';
    
    if (yearFilter.value) {
      semesterFilter.disabled = false;
      Object.keys(departments[departmentFilter.value][yearFilter.value]).forEach(semester => {
        const option = document.createElement('option');
        option.value = semester;
        option.textContent = semester;
        semesterFilter.appendChild(option);
      });
    } else {
      semesterFilter.disabled = true;
      subjectFilter.disabled = true;
    }
    handleSearch();
  });

  semesterFilter.addEventListener('change', () => {
    subjectFilter.innerHTML = '<option value="">المادة</option>';
    
    if (semesterFilter.value) {
      subjectFilter.disabled = false;
      Object.keys(departments[departmentFilter.value][yearFilter.value][semesterFilter.value]).forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectFilter.appendChild(option);
      });
    } else {
      subjectFilter.disabled = true;
    }
    handleSearch();
  });

  subjectFilter.addEventListener('change', handleSearch);
}

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedDepartment = document.getElementById('department-filter').value;
  const selectedYear = document.getElementById('year-filter').value;
  const selectedSemester = document.getElementById('semester-filter').value;
  const selectedSubject = document.getElementById('subject-filter').value;

  let filteredBooks = books;

  if (selectedDepartment) {
    filteredBooks = filteredBooks.filter(book => book.department === selectedDepartment);
  }
  if (selectedYear) {
    filteredBooks = filteredBooks.filter(book => book.year === selectedYear);
  }
  if (selectedSemester) {
    filteredBooks = filteredBooks.filter(book => book.semester === selectedSemester);
  }
  if (selectedSubject) {
    filteredBooks = filteredBooks.filter(book => book.subject === selectedSubject);
  }
  
  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
  }

  if (!selectedDepartment && !searchTerm) {
    displayDepartments();
    return;
  }

  displaySearchResults(filteredBooks);
}

// عرض نتائج البحث
function displaySearchResults(filteredBooks) {
  booksGrid.innerHTML = '';

  const backBtn = createBackButton(() => displayDepartments());
  booksGrid.appendChild(backBtn);

  const searchTitle = document.createElement('h2');
  searchTitle.className = 'section-title';
  searchTitle.textContent = 'نتائج البحث';
  booksGrid.appendChild(searchTitle);

  const booksContainer = document.createElement('div');
  booksContainer.className = 'search-results-container';

  if (filteredBooks.length === 0) {
    const noResults = document.createElement('p');
    noResults.className = 'no-books';
    noResults.textContent = 'لا توجد نتائج للبحث.';
    booksContainer.appendChild(noResults);
  } else {
    // تنظيم النتائج حسب التسلسل الهرمي
    const organizedResults = {};
    
    filteredBooks.forEach(book => {
      if (!organizedResults[book.department]) {
        organizedResults[book.department] = {};
      }
      if (!organizedResults[book.department][book.year]) {
        organizedResults[book.department][book.year] = {};
      }
      if (!organizedResults[book.department][book.year][book.semester]) {
        organizedResults[book.department][book.year][book.semester] = {};
      }
      if (!organizedResults[book.department][book.year][book.semester][book.subject]) {
        organizedResults[book.department][book.year][book.semester][book.subject] = [];
      }
      organizedResults[book.department][book.year][book.semester][book.subject].push(book);
    });

    // عرض النتائج المنظمة
    for (const dept in organizedResults) {
      const deptDiv = document.createElement('div');
      deptDiv.className = 'search-department';
      deptDiv.innerHTML = `<h3>${dept}</h3>`;

      for (const year in organizedResults[dept]) {
        const yearDiv = document.createElement('div');
        yearDiv.className = 'search-year';
        yearDiv.innerHTML = `<h4>${year}</h4>`;

        for (const semester in organizedResults[dept][year]) {
          const semesterDiv = document.createElement('div');
          semesterDiv.className = 'search-semester';
          semesterDiv.innerHTML = `<h5>${semester}</h5>`;

          for (const subject in organizedResults[dept][year][semester]) {
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'search-subject';
            subjectDiv.innerHTML = `<h6>${subject}</h6>`;

            const booksGrid = document.createElement('div');
            booksGrid.className = 'books-container-grid';

            organizedResults[dept][year][semester][subject].forEach(book => {
              const bookCard = createBookCard(book);
              booksGrid.appendChild(bookCard);
            });

            subjectDiv.appendChild(booksGrid);
            semesterDiv.appendChild(subjectDiv);
          }
          yearDiv.appendChild(semesterDiv);
        }
        deptDiv.appendChild(yearDiv);
      }
      booksContainer.appendChild(deptDiv);
    }
  }

  booksGrid.appendChild(booksContainer);
}