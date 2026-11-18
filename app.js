    const appointments = [
      {
        id: 1,
        time: '10:30',
        patient: 'Paciente B',
        doctor: 'Dr. Soto',
        procedure: 'Endodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 45,
        overlap: '11:45',
        tone: 'green',
        startMinutes: 630,
        endMinutes: 660,
        dayOffset: 1
      },
      {
        id: 2,
        time: '11:00',
        patient: 'Paciente D',
        doctor: 'Dra. Pino',
        procedure: 'Control preventivo',
        box: 'Box 1',
        duration: 45,
        budget: 60,
        overlap: '11:30',
        tone: 'peach',
        startMinutes: 660,
        endMinutes: 720,
        dayOffset: 1
      },
      {
        id: 3,
        time: '12:30',
        patient: 'Paciente A',
        doctor: 'Dr. Soto',
        procedure: 'Limpieza',
        box: 'Box 3',
        duration: 30,
        budget: 35,
        overlap: '12:45',
        tone: 'blue',
        startMinutes: 750,
        endMinutes: 780,
        dayOffset: 2
      },
      {
        id: 4,
        time: '13:00',
        patient: 'Paciente C',
        doctor: 'Dra. Rivas',
        procedure: 'Blanqueamiento',
        box: 'Box 4',
        duration: 45,
        budget: 60,
        overlap: '14:00',
        tone: 'green',
        startMinutes: 780,
        endMinutes: 840,
        dayOffset: 2
      },
      {
        id: 5,
        time: '09:00',
        patient: 'Paciente E',
        doctor: 'Dra. Rivas',
        procedure: 'Control preventivo',
        box: 'Box 1',
        duration: 30,
        budget: 30,
        overlap: '09:30',
        tone: 'blue',
        startMinutes: 540,
        endMinutes: 570,
        dayOffset: 0
      },
      {
        id: 6,
        time: '09:30',
        patient: 'Paciente F',
        doctor: 'Dr. Soto',
        procedure: 'Evaluación de ortodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 45,
        overlap: '10:00',
        tone: 'green',
        startMinutes: 570,
        endMinutes: 600,
        dayOffset: 0
      },
      {
        id: 7,
        time: '14:00',
        patient: 'Paciente G',
        doctor: 'Dra. Pino',
        procedure: 'Restauración dental',
        box: 'Box 1',
        duration: 30,
        budget: 40,
        overlap: '14:30',
        tone: 'peach',
        startMinutes: 840,
        endMinutes: 870,
        dayOffset: 3
      },
      {
        id: 8,
        time: '14:30',
        patient: 'Paciente H',
        doctor: 'Dr. Soto',
        procedure: 'Control postoperatorio',
        box: 'Box 3',
        duration: 30,
        budget: 25,
        overlap: '15:00',
        tone: 'blue',
        startMinutes: 870,
        endMinutes: 900,
        dayOffset: 3
      },
      {
        id: 9,
        time: '10:30',
        patient: 'Paciente B',
        doctor: 'Dr. Soto',
        procedure: 'Evaluación de sensibilidad',
        box: 'Box 2',
        duration: 30,
        budget: 30,
        overlap: '11:00',
        tone: 'green',
        startMinutes: 630,
        endMinutes: 660,
        dayOffset: 0
      },
      {
        id: 10,
        time: '13:15',
        patient: 'Paciente I',
        doctor: 'Dra. Rivas',
        procedure: 'Limpieza dental',
        box: 'Box 4',
        duration: 30,
        budget: 35,
        overlap: '13:45',
        tone: 'blue',
        startMinutes: 795,
        endMinutes: 825,
        dayOffset: 0
      },
      {
        id: 11,
        time: '09:00',
        patient: 'Paciente J',
        doctor: 'Dra. Pino',
        procedure: 'Evaluación inicial',
        box: 'Box 1',
        duration: 30,
        budget: 25,
        overlap: '09:30',
        tone: 'peach',
        startMinutes: 540,
        endMinutes: 570,
        dayOffset: 1
      },
      {
        id: 12,
        time: '14:00',
        patient: 'Paciente E',
        doctor: 'Dra. Rivas',
        procedure: 'Control preventivo',
        box: 'Box 4',
        duration: 30,
        budget: 30,
        overlap: '14:30',
        tone: 'blue',
        startMinutes: 840,
        endMinutes: 870,
        dayOffset: 1
      },
      {
        id: 13,
        time: '09:30',
        patient: 'Paciente F',
        doctor: 'Dr. Soto',
        procedure: 'Revisión de ortodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 35,
        overlap: '10:00',
        tone: 'green',
        startMinutes: 570,
        endMinutes: 600,
        dayOffset: 2
      },
      {
        id: 14,
        time: '14:30',
        patient: 'Paciente G',
        doctor: 'Dra. Pino',
        procedure: 'Control de restauración',
        box: 'Box 1',
        duration: 30,
        budget: 30,
        overlap: '15:00',
        tone: 'peach',
        startMinutes: 870,
        endMinutes: 900,
        dayOffset: 2
      },
      {
        id: 15,
        time: '10:00',
        patient: 'Paciente H',
        doctor: 'Dr. Soto',
        procedure: 'Revisión postoperatoria',
        box: 'Box 3',
        duration: 30,
        budget: 25,
        overlap: '10:30',
        tone: 'blue',
        startMinutes: 600,
        endMinutes: 630,
        dayOffset: 3
      },
      {
        id: 16,
        time: '12:30',
        patient: 'Paciente I',
        doctor: 'Dra. Rivas',
        procedure: 'Consulta de seguimiento',
        box: 'Box 4',
        duration: 30,
        budget: 30,
        overlap: '13:00',
        tone: 'green',
        startMinutes: 750,
        endMinutes: 780,
        dayOffset: 3
      },
      {
        id: 17,
        time: '09:00',
        patient: 'Paciente J',
        doctor: 'Dra. Pino',
        procedure: 'Limpieza dental',
        box: 'Box 1',
        duration: 30,
        budget: 35,
        overlap: '09:30',
        tone: 'peach',
        startMinutes: 540,
        endMinutes: 570,
        dayOffset: 4
      },
      {
        id: 18,
        time: '15:15',
        patient: 'Paciente B',
        doctor: 'Dr. Soto',
        procedure: 'Control de endodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 30,
        overlap: '15:45',
        tone: 'green',
        startMinutes: 915,
        endMinutes: 945,
        dayOffset: 4
      },
      {
        id: 19,
        time: '10:00',
        patient: 'Paciente E',
        doctor: 'Dra. Rivas',
        procedure: 'Evaluación preventiva',
        box: 'Box 4',
        duration: 30,
        budget: 25,
        overlap: '10:30',
        tone: 'blue',
        startMinutes: 600,
        endMinutes: 630,
        dayOffset: 5
      },
      {
        id: 20,
        time: '13:30',
        patient: 'Paciente F',
        doctor: 'Dr. Soto',
        procedure: 'Ajuste de ortodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 35,
        overlap: '14:00',
        tone: 'green',
        startMinutes: 810,
        endMinutes: 840,
        dayOffset: 5
      },
      {
        id: 21,
        time: '09:30',
        patient: 'Paciente G',
        doctor: 'Dra. Pino',
        procedure: 'Restauración dental',
        box: 'Box 1',
        duration: 45,
        budget: 50,
        overlap: '10:15',
        tone: 'peach',
        startMinutes: 570,
        endMinutes: 615,
        dayOffset: 6
      },
      {
        id: 22,
        time: '14:30',
        patient: 'Paciente H',
        doctor: 'Dr. Soto',
        procedure: 'Control preventivo',
        box: 'Box 3',
        duration: 30,
        budget: 25,
        overlap: '15:00',
        tone: 'blue',
        startMinutes: 870,
        endMinutes: 900,
        dayOffset: 6
      },
      {
        id: 23,
        time: '11:30',
        patient: 'Paciente J',
        doctor: 'Dra. Pino',
        procedure: 'Evaluación de encías',
        box: 'Box 1',
        duration: 30,
        budget: 30,
        overlap: '12:00',
        tone: 'peach',
        startMinutes: 690,
        endMinutes: 720,
        dayOffset: 0
      },
      {
        id: 24,
        time: '15:00',
        patient: 'Paciente A',
        doctor: 'Dr. Soto',
        procedure: 'Control de limpieza',
        box: 'Box 3',
        duration: 30,
        budget: 25,
        overlap: '15:30',
        tone: 'blue',
        startMinutes: 900,
        endMinutes: 930,
        dayOffset: 0
      },
      {
        id: 25,
        time: '13:30',
        patient: 'Paciente E',
        doctor: 'Dra. Rivas',
        procedure: 'Control preventivo',
        box: 'Box 4',
        duration: 30,
        budget: 30,
        overlap: '14:30',
        tone: 'blue',
        startMinutes: 810,
        endMinutes: 840,
        dayOffset: 1
      },
      {
        id: 26,
        time: '10:30',
        patient: 'Paciente F',
        doctor: 'Dr. Soto',
        procedure: 'Revisión de ortodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 35,
        overlap: '10:00',
        tone: 'green',
        startMinutes: 630,
        endMinutes: 660,
        dayOffset: 2
      },
      {
        id: 27,
        time: '15:00',
        patient: 'Paciente G',
        doctor: 'Dra. Pino',
        procedure: 'Control de restauración',
        box: 'Box 1',
        duration: 30,
        budget: 30,
        overlap: '15:00',
        tone: 'peach',
        startMinutes: 900,
        endMinutes: 930,
        dayOffset: 2
      },
      {
        id: 28,
        time: '11:30',
        patient: 'Paciente H',
        doctor: 'Dr. Soto',
        procedure: 'Revisión postoperatoria',
        box: 'Box 3',
        duration: 30,
        budget: 25,
        overlap: '10:30',
        tone: 'blue',
        startMinutes: 690,
        endMinutes: 720,
        dayOffset: 3
      },
      {
        id: 29,
        time: '13:00',
        patient: 'Paciente I',
        doctor: 'Dra. Rivas',
        procedure: 'Consulta de seguimiento',
        box: 'Box 4',
        duration: 30,
        budget: 30,
        overlap: '13:00',
        tone: 'green',
        startMinutes: 780,
        endMinutes: 810,
        dayOffset: 3
      },
      {
        id: 30,
        time: '10:30',
        patient: 'Paciente J',
        doctor: 'Dra. Pino',
        procedure: 'Limpieza dental',
        box: 'Box 1',
        duration: 30,
        budget: 35,
        overlap: '09:30',
        tone: 'peach',
        startMinutes: 630,
        endMinutes: 660,
        dayOffset: 4
      },
      {
        id: 31,
        time: '14:30',
        patient: 'Paciente B',
        doctor: 'Dr. Soto',
        procedure: 'Control de endodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 30,
        overlap: '15:45',
        tone: 'green',
        startMinutes: 870,
        endMinutes: 900,
        dayOffset: 4
      },
      {
        id: 32,
        time: '09:00',
        patient: 'Paciente E',
        doctor: 'Dra. Rivas',
        procedure: 'Evaluación preventiva',
        box: 'Box 4',
        duration: 30,
        budget: 25,
        overlap: '10:30',
        tone: 'blue',
        startMinutes: 540,
        endMinutes: 570,
        dayOffset: 5
      },
      {
        id: 33,
        time: '15:15',
        patient: 'Paciente F',
        doctor: 'Dr. Soto',
        procedure: 'Ajuste de ortodoncia',
        box: 'Box 2',
        duration: 30,
        budget: 35,
        overlap: '14:00',
        tone: 'green',
        startMinutes: 915,
        endMinutes: 945,
        dayOffset: 5
      },
      {
        id: 34,
        time: '11:00',
        patient: 'Paciente G',
        doctor: 'Dra. Pino',
        procedure: 'Restauración dental',
        box: 'Box 1',
        duration: 45,
        budget: 50,
        overlap: '10:15',
        tone: 'peach',
        startMinutes: 660,
        endMinutes: 690,
        dayOffset: 6
      },
      {
        id: 35,
        time: '13:00',
        patient: 'Paciente H',
        doctor: 'Dr. Soto',
        procedure: 'Control preventivo',
        box: 'Box 3',
        duration: 30,
        budget: 25,
        overlap: '15:00',
        tone: 'blue',
        startMinutes: 780,
        endMinutes: 810,
        dayOffset: 6
      }
    ];

    const branchByBox = {
      'Box 1': 'MI DIENTE FELIZ - Av. Alemania Temuco',
      'Box 2': 'MI DIENTE FELIZ - Inglaterra',
      'Box 3': 'MI DIENTE FELIZ - Centro Temuco',
      'Box 4': 'MI DIENTE FELIZ - Av. Alemania Temuco'
    };

    const weekdayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const branchDetails = [
      { name: 'MI DIENTE FELIZ - Av. Alemania Temuco', address: 'Av. Alemania 999, Ofi 403', phone: '9 3090 1578' },
      { name: 'MI DIENTE FELIZ - Inglaterra', address: 'Inglaterra 0895, Loc 101', phone: '9 4080 3522' },
      { name: 'MI DIENTE FELIZ - Centro Temuco', address: 'Antonio Varas 687, Ofi 811', phone: '9 7516 6350' }
    ];
    const branchSchedules = Object.fromEntries(branchDetails.map(branch => [
      branch.name,
      weekdayNames.slice(1).map(day => ({
        day,
        start: '09:00',
        end: '19:00'
      }))
    ]));
    const branchByDoctor = {
      'Dr. Soto': 'MI DIENTE FELIZ - Inglaterra',
      'Dra. Pino': 'MI DIENTE FELIZ - Av. Alemania Temuco',
      'Dra. Rivas': 'MI DIENTE FELIZ - Centro Temuco'
    };
    let branches = branchDetails.map(branch => branch.name);

    const equipmentByBox = {
      'Box 1': ['Sillón dental', 'Lámpara operatoria', 'Unidad de succión', 'Compresor dental', 'Instrumental de examen'],
      'Box 2': ['Sillón dental', 'Lámpara operatoria', 'Unidad de succión', 'Compresor dental', 'Instrumental de odontología infantil'],
      'Box 3': ['Sillón dental', 'Lámpara operatoria', 'Unidad de succión', 'Compresor dental', 'Instrumental de examen'],
      'Box 4': ['Sillón dental', 'Lámpara operatoria', 'Unidad de succión', 'Compresor dental', 'Instrumental para tratamientos estéticos']
    };

    const completedVisits = [
      { patient: 'Paciente A', doctor: 'Dr. Soto', procedure: 'Limpieza dental y control preventivo', box: 'Box 3', branch: branchByBox['Box 3'], time: '10:00', dayOffset: -30, completed: true },
      { patient: 'Paciente B', doctor: 'Dr. Soto', procedure: 'Endodoncia · sesión inicial', box: 'Box 2', branch: branchByBox['Box 2'], time: '11:00', dayOffset: -21, completed: true },
      { patient: 'Paciente B', doctor: 'Dr. Soto', procedure: 'Endodoncia · limpieza de conductos', box: 'Box 2', branch: branchByBox['Box 2'], time: '11:30', dayOffset: -14, completed: true },
      { patient: 'Paciente C', doctor: 'Dra. Rivas', procedure: 'Blanqueamiento dental', box: 'Box 4', branch: branchByBox['Box 4'], time: '12:00', dayOffset: -18, completed: true },
      { patient: 'Paciente D', doctor: 'Dra. Pino', procedure: 'Restauración de pieza dental', box: 'Box 1', branch: branchByBox['Box 1'], time: '09:30', dayOffset: -35, completed: true },
      { patient: 'Paciente E', doctor: 'Dra. Rivas', procedure: 'Control preventivo', box: 'Box 4', branch: branchByBox['Box 4'], time: '10:30', dayOffset: -7, completed: true },
      { patient: 'Paciente F', doctor: 'Dr. Soto', procedure: 'Evaluación de ortodoncia', box: 'Box 2', branch: branchByBox['Box 2'], time: '13:00', dayOffset: -12, completed: true },
      { patient: 'Paciente G', doctor: 'Dra. Pino', procedure: 'Evaluación y plan de extracción', box: 'Box 1', branch: branchByBox['Box 1'], time: '14:00', dayOffset: -20, completed: true },
      { patient: 'Paciente H', doctor: 'Dr. Soto', procedure: 'Limpieza con flúor', box: 'Box 3', branch: branchByBox['Box 3'], time: '10:00', dayOffset: -16, completed: true },
      { patient: 'Paciente I', doctor: 'Dra. Rivas', procedure: 'Limpieza dental', box: 'Box 4', branch: branchByBox['Box 4'], time: '12:30', dayOffset: -9, completed: true },
      { patient: 'Paciente J', doctor: 'Dra. Pino', procedure: 'Evaluación de encías', box: 'Box 1', branch: branchByBox['Box 1'], time: '09:00', dayOffset: -25, completed: true }
    ];

    const patients = {
      'Paciente A': { rut: '12.345.678-5', allergy: 'No registrada', doctor: 'Dr. Soto', phone: '+56 9 2006 5034', email: 'paciente.a@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente B': { rut: '18.112.654-K', allergy: 'No registrada', doctor: 'Dr. Soto', phone: '+56 9 5555 1202', email: 'paciente.b@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente C': { rut: '16.778.221-3', allergy: 'No registrada', doctor: 'Dra. Rivas', phone: '+56 9 5555 1203', email: 'paciente.c@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente D': { rut: '20.543.778-9', allergy: 'No registrada', doctor: 'Dra. Pino', phone: '+56 9 5555 1204', email: 'paciente.d@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente E': { rut: '14.226.809-4', allergy: 'No registrada', doctor: 'Dra. Rivas', phone: '+56 9 5555 1205', email: 'paciente.e@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente F': { rut: '19.504.337-K', allergy: 'No registrada', doctor: 'Dr. Soto', phone: '+56 9 5555 1206', email: 'paciente.f@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente G': { rut: '17.883.420-7', allergy: 'No registrada', doctor: 'Dra. Pino', phone: '+56 9 5555 1207', email: 'paciente.g@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente H': { rut: '15.972.641-K', allergy: 'No registrada', doctor: 'Dr. Soto', phone: '+56 9 5555 1208', email: 'paciente.h@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente I': { rut: '13.809.552-5', allergy: 'No registrada', doctor: 'Dra. Rivas', phone: '+56 9 5555 1209', email: 'paciente.i@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' },
      'Paciente J': { rut: '21.306.478-9', allergy: 'No registrada', doctor: 'Dra. Pino', phone: '+56 9 5555 1210', email: 'paciente.j@correo.cl', bruxism: 'No registrado', medications: 'No registrados', illnesses: 'No registradas', cleaning: 'No registrada' }
    };

    const patientToothStates = {
      'Paciente A': [
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy',
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy',
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy',
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy'
      ],
      'Paciente B': [
        'healthy', 'filled', 'root', 'healthy', 'cavity', 'healthy', 'filled', 'healthy',
        'healthy', 'filled', 'filled', 'healthy', 'cavity', 'root', 'filled', 'healthy',
        'healthy', 'filled', 'healthy', 'healthy', 'observation', 'healthy', 'filled', 'healthy',
        'healthy', 'missing', 'healthy', 'healthy', 'healthy', 'missing', 'healthy', 'healthy'
      ],
      'Paciente C': [
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy',
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy',
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy',
        'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy', 'healthy'
      ],
      'Paciente D': [
        'filled', 'healthy', 'root', 'healthy', 'healthy', 'filled', 'healthy', 'missing',
        'root', 'healthy', 'healthy', 'cavity', 'healthy', 'filled', 'observation', 'healthy',
        'healthy', 'healthy', 'filled', 'healthy', 'healthy', 'missing', 'healthy', 'healthy',
        'healthy', 'healthy', 'filled', 'healthy', 'healthy', 'healthy', 'root', 'healthy'
      ],
      'Paciente E': Array.from({ length: 32 }, (_, index) => index === 4 ? 'observation' : 'healthy'),
      'Paciente F': Array.from({ length: 32 }, (_, index) => [10, 11, 20, 21].includes(index) ? 'filled' : 'healthy'),
      'Paciente G': Array.from({ length: 32 }, (_, index) => index === 13 ? 'cavity' : 'healthy'),
      'Paciente H': Array.from({ length: 32 }, (_, index) => index === 26 ? 'root' : 'healthy')
      ,
      'Paciente I': Array.from({ length: 32 }, (_, index) => index === 6 ? 'observation' : 'healthy'),
      'Paciente J': Array.from({ length: 32 }, (_, index) => index === 17 ? 'cavity' : 'healthy')
    };

    const toothNumbers = [
      18, 17, 16, 15, 14, 13, 12, 11,
      21, 22, 23, 24, 25, 26, 27, 28,
      48, 47, 46, 45, 44, 43, 42, 41,
      31, 32, 33, 34, 35, 36, 37, 38
    ];
    const toothPositions = {
      1: 'incisivo central',
      2: 'incisivo lateral',
      3: 'canino',
      4: 'primer premolar',
      5: 'segundo premolar',
      6: 'primer molar',
      7: 'segundo molar',
      8: 'tercer molar'
    };
    const toothQuadrants = {
      1: 'superior derecho',
      2: 'superior izquierdo',
      3: 'inferior izquierdo',
      4: 'inferior derecho'
    };
    const toothStateLabels = {
      healthy: 'sano',
      filled: 'obturado',
      root: 'tratamiento de conducto',
      missing: 'ausente',
      cavity: 'con caries',
      observation: 'en observación'
    };


    const paymentsByPatient = {
      'Paciente A': { treatment: 'Limpieza dental', total: 35000, convenio: null, overdue: false, payments: [
        { date: '05 nov 2026', concept: 'Abono inicial', method: 'Transferencia', amount: 20000 } ] },
      'Paciente B': { treatment: 'Endodoncia', total: 180000, convenio: { name: 'Convenio institucional', pct: 15 }, overdue: false, payments: [
        { date: '26 oct 2026', concept: 'Abono inicial', method: 'Efectivo', amount: 50000 },
        { date: '06 nov 2026', concept: 'Abono sesión 2', method: 'Tarjeta de débito', amount: 40000 } ] },
      'Paciente C': { treatment: 'Blanqueamiento', total: 120000, convenio: null, overdue: false, payments: [
        { date: '02 nov 2026', concept: 'Pago total', method: 'Tarjeta de crédito', amount: 120000 } ] },
      'Paciente D': { treatment: 'Tratamiento restaurador', total: 90000, convenio: null, overdue: true, payments: [
        { date: '14 sep 2026', concept: 'Abono inicial', method: 'Efectivo', amount: 20000 } ] },
      'Paciente E': { treatment: 'Control preventivo', total: 25000, convenio: { name: 'Convenio Fonasa', pct: 20 }, overdue: false, payments: [
        { date: '09 nov 2026', concept: 'Pago total', method: 'Tarjeta de débito', amount: 20000 } ] },
      'Paciente F': { treatment: 'Evaluación de ortodoncia', total: 60000, convenio: { name: 'Convenio institucional', pct: 10 }, overdue: false, payments: [
        { date: '30 oct 2026', concept: 'Abono inicial', method: 'Transferencia', amount: 30000 } ] },
      'Paciente G': { treatment: 'Extracción', total: 45000, convenio: null, overdue: false, payments: [] },
      'Paciente H': { treatment: 'Limpieza con flúor', total: 40000, convenio: null, overdue: false, payments: [
        { date: '04 nov 2026', concept: 'Pago total', method: 'Efectivo', amount: 40000 } ] },
      'Paciente I': { treatment: 'Limpieza dental', total: 35000, convenio: { name: 'Convenio Fonasa', pct: 20 }, overdue: false, payments: [
        { date: '09 nov 2026', concept: 'Pago total', method: 'Tarjeta de débito', amount: 28000 } ] },
      'Paciente J': { treatment: 'Evaluación de encías', total: 50000, convenio: null, overdue: false, payments: [
        { date: '07 nov 2026', concept: 'Abono inicial', method: 'Transferencia', amount: 25000 } ] }
    };

    const patientNameMap = {
      'Paciente A': 'Camila Rojas',
      'Paciente B': 'Matías González',
      'Paciente C': 'Valentina Muñoz',
      'Paciente D': 'Benjamín Soto',
      'Paciente E': 'Antonia Pérez',
      'Paciente F': 'Joaquín Morales',
      'Paciente G': 'Isidora Contreras',
      'Paciente H': 'Vicente Silva',
      'Paciente I': 'Emilia Torres',
      'Paciente J': 'Tomás Herrera'
    };

    [patients, patientToothStates, paymentsByPatient].forEach((records) => {
      Object.entries(patientNameMap).forEach(([oldName, newName]) => {
        const record = records[oldName];
        records[newName] = record;
        delete records[oldName];
        Object.defineProperty(records, oldName, { value: record, configurable: true });
      });
    });
    [appointments, completedVisits].forEach((visits) => {
      visits.forEach((visit) => { visit.patient = patientNameMap[visit.patient] || visit.patient; });
    });
    Object.entries(patientNameMap).forEach(([oldName, newName]) => {
      patients[newName].email = `${newName.toLocaleLowerCase('es-CL').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '.')}@correo.cl`;
    });

    const formatCLP = (value) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(value);

    function renderPayments(patientName) {
      const info = paymentsByPatient[patientName] || paymentsByPatient['Paciente A'];
      const patient = patients[patientName] || patients['Paciente A'];
      const discount = info.convenio ? Math.round(info.total * info.convenio.pct / 100) : 0;
      const net = info.total - discount;
      const paid = info.payments.reduce((sum, p) => sum + p.amount, 0);
      const balance = Math.max(net - paid, 0);
      const percent = net > 0 ? Math.min(Math.round((paid / net) * 100), 100) : 0;

      document.getElementById('payPatientName').textContent = patientName;
      document.getElementById('payMeta').textContent = `RUT ${patient.rut} · ${info.treatment}`;
      document.getElementById('payTotal').textContent = formatCLP(info.total);
      document.getElementById('payDiscountLabel').textContent = info.convenio ? `${info.convenio.name} (${info.convenio.pct} %)` : 'Convenio';
      document.getElementById('payDiscount').textContent = info.convenio ? `− ${formatCLP(discount)}` : 'Sin convenio';
      document.getElementById('payPaid').textContent = formatCLP(paid);
      document.getElementById('payBalance').textContent = formatCLP(balance);
      document.querySelector('.pay-stat-balance').classList.toggle('settled', balance === 0);

      const chip = document.getElementById('payStatusChip');
      chip.className = 'chip';
      if (balance === 0) { chip.textContent = 'Pagado'; chip.classList.add('green'); }
      else if (info.overdue) { chip.textContent = 'Morosidad registrada'; chip.classList.add('peach'); }
      else { chip.textContent = 'Saldo pendiente'; }

      document.getElementById('payProgressText').textContent = `${percent} % pagado`;
      document.getElementById('payProgressFill').style.width = `${percent}%`;
      document.getElementById('payProgress').setAttribute('aria-valuenow', String(percent));

      const rows = document.getElementById('payRows');
      rows.innerHTML = '';
      if (!info.payments.length) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 4; td.className = 'pay-empty';
        td.textContent = 'Aún no hay abonos registrados para este paciente.';
        tr.appendChild(td); rows.appendChild(tr);
        return;
      }
      info.payments.forEach((p) => {
        const tr = document.createElement('tr');
        [p.date, p.concept, p.method, formatCLP(p.amount)].forEach((text, i) => {
          const td = document.createElement('td');
          td.textContent = text;
          if (i === 3) td.className = 'num';
          tr.appendChild(td);
        });
        rows.appendChild(tr);
      });
    }

    const state = {
      activeView: 'home',
      selectedPatient: 'Camila Rojas',
      selectedToothIndex: null,
      currentTab: 'odontograma',
      selectedDayOffset: 0,
      doctorFilter: '',
      branchFilter: '',
      selectedAppointmentId: null,
      editingAppointmentId: null,
      navigationHistory: [],
      signatureDrawn: false,
      browserHistoryReady: false,
      browserHistoryIndex: 0
    };

    const agendaStartDate = new Date();
    agendaStartDate.setHours(12, 0, 0, 0);

    function getAgendaDate(offset) {
      const date = new Date(agendaStartDate);
      date.setDate(date.getDate() + offset);
      return date;
    }

    function toDateInputValue(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function getDateOffset(value) {
      if (!value) return NaN;
      const [year, month, day] = value.split('-').map(Number);
      const selectedDate = new Date(year, month - 1, day, 12);
      return Math.round((selectedDate - agendaStartDate) / 86400000);
    }

    function renderAgendaDate() {
      const selectedDate = getAgendaDate(state.selectedDayOffset);
      const dateText = new Intl.DateTimeFormat('es-CL', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(selectedDate);
      document.getElementById('agendaDate').textContent =
        dateText.charAt(0).toLocaleUpperCase('es-CL') + dateText.slice(1);
      document.getElementById('agendaTodayLabel').textContent =
        state.selectedDayOffset === 0 ? 'Hoy' : `En ${state.selectedDayOffset} día${state.selectedDayOffset === 1 ? '' : 's'}`;
    }

    function renderWeekStrip() {
      const strip = document.getElementById('weekStrip');
      strip.innerHTML = '';
      const weekdayFormatter = new Intl.DateTimeFormat('es-CL', { weekday: 'short' });

      for (let offset = 0; offset < 7; offset += 1) {
        const date = getAgendaDate(offset);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `week-day${offset === state.selectedDayOffset ? ' active' : ''}`;
        button.setAttribute('aria-pressed', offset === state.selectedDayOffset ? 'true' : 'false');
        button.setAttribute('aria-label', new Intl.DateTimeFormat('es-CL', {
          weekday: 'long',
          day: 'numeric',
          month: 'long'
        }).format(date));
        button.innerHTML = `<span class="week-day-name">${weekdayFormatter.format(date).replace('.', '')}</span><span class="week-day-number">${date.getDate()}</span>`;
        button.addEventListener('click', () => {
          state.selectedDayOffset = offset;
          renderWeekStrip();
          renderAgendaDate();
          initAgenda();
        });
        strip.appendChild(button);
      }
    }

    function initAgenda() {
      const grid = document.getElementById('agendaGrid');
      grid.innerHTML = '';

      const dayItems = appointments.filter(a => a.dayOffset === state.selectedDayOffset &&
        (!state.doctorFilter || a.doctor === state.doctorFilter) &&
        (!state.branchFilter || (a.branch || branchByBox[a.box]) === state.branchFilter));
      const rows = [
        { start: 540, end: 600 },
        { start: 600, end: 660 },
        { start: 660, end: 720 },
        { start: 720, end: 780 },
        { start: 780, end: 840 },
        { start: 840, end: 900 },
        { start: 900, end: 960 }
      ];

      rows.forEach((row) => {
        const rowSlots = document.createElement('div');
        rowSlots.className = 'grid-row';
        rowSlots.style.position = 'relative';
        rowSlots.style.height = '84px';
        rowSlots.style.width = '100%';

        const rowData = dayItems.filter(item =>
          item.startMinutes >= row.start &&
          item.startMinutes < row.end
        );
        rowData.forEach(item => {
          const appointmentEl = document.createElement('button');
          appointmentEl.type = 'button';
          appointmentEl.className = 'appointment';
          appointmentEl.dataset.tone = item.tone;
          appointmentEl.style.top = `${((item.startMinutes - row.start) / 60) * 84 + 4}px`;
          const group = dayItems.filter(o => o.startMinutes < item.endMinutes && o.endMinutes > item.startMinutes);
          const gi = group.indexOf(item), gn = group.length;
          appointmentEl.style.left = `calc(${(gi * 100) / gn}% + 10px)`;
          appointmentEl.style.width = `calc(${100 / gn}% - 14px)`;
          appointmentEl.title = `${item.doctor} · ${item.box}`;
          appointmentEl.style.height = `${Math.max(42, ((item.endMinutes - item.startMinutes) / 60) * 84 - 8)}px`;

          const startText = document.createElement('div');
          startText.className = 'time';
          startText.textContent = item.time;

          const info = document.createElement('div');
          info.className = 'info';
          info.textContent = `${item.patient} · ${item.procedure}`;

          appointmentEl.appendChild(startText);
          appointmentEl.appendChild(info);
          appointmentEl.addEventListener('click', () => selectAppointment(item));
          rowSlots.appendChild(appointmentEl);
        });

        grid.appendChild(rowSlots);
      });

      const hasAppointments = dayItems.length > 0;
      if (!hasAppointments) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-day';
        emptyMessage.textContent = 'No hay citas para este día con el filtro seleccionado.';
        grid.appendChild(emptyMessage);
      }
    }

    const durationReasons = [
      ['control', 'Revisión clínica, evaluación del estado bucal y limpieza básica.'],
      ['revisión', 'Revisión clínica y evaluación del estado bucal.'],
      ['limpieza', 'Remoción de sarro y placa, pulido y control de higiene.'],
      ['blanqueamiento', 'Aplicación del gel, tiempo de activación y evaluación del resultado.'],
      ['endodoncia', 'Tratamiento de conducto: acceso, limpieza y sellado del conducto.'],
      ['ortodoncia', 'Evaluación de mordida y planificación del tratamiento.'],
      ['restauración', 'Preparación de la pieza, aplicación del material y ajuste de mordida.'],
      ['extracción', 'Anestesia, extracción de la pieza e indicaciones posteriores.'],
      ['evaluación', 'Evaluación clínica inicial y definición del plan de tratamiento.'],
      ['consulta', 'Consulta clínica y definición del plan de tratamiento.']
    ];
    function durationReason(item) {
      const low = (item.procedure || '').toLowerCase();
      const hit = durationReasons.find(([k]) => low.includes(k));
      const base = hit ? hit[1] : 'Tiempo estimado según el procedimiento agendado.';
      return `${item.procedure}: ${base}`;
    }

    function selectAppointment(item) {
      state.selectedAppointmentId = item.id;
      state.selectedPatient = item.patient;
      document.getElementById('editAppointment').disabled = false;
      document.getElementById('deleteAppointment').disabled = false;
      document.getElementById('detailDoctor').textContent = item.doctor;
      document.getElementById('detailPatient').textContent = item.patient;
      document.getElementById('detailBox').textContent = `${item.branch || branchByBox[item.box]} · ${item.box}`;
      document.getElementById('detailDuration').textContent = `${item.duration} minutos`;
      document.getElementById('detailDurationReason').textContent = durationReason(item);
      const endMin = item.endMinutes != null ? item.endMinutes : item.startMinutes + item.duration;
      document.getElementById('detailSchedule').textContent = `${item.time} – ${String(Math.floor(endMin / 60)).padStart(2, '0')}:${String(endMin % 60).padStart(2, '0')}`;
      const clash = appointments.find(a => a !== item && a.dayOffset === item.dayOffset && a.startMinutes < endMin && a.endMinutes > item.startMinutes &&
        (a.doctor === item.doctor || ((a.branch || branchByBox[a.box]) === (item.branch || branchByBox[item.box]) && a.box === item.box)));
      const st = document.getElementById('detailStatus');
      st.textContent = clash ? 'Cruce de horario' : 'Sin cruces';
      st.className = 'chip ' + (clash ? 'peach' : 'green');

      const patient = patients[item.patient] || patients['Paciente A'];
      document.getElementById('recordName').textContent = item.patient;
      document.getElementById('recordMeta').textContent = `RUT ${patient.rut} · Alergia: ${patient.allergy}`;
      document.getElementById('clinicalPatientName').textContent = item.patient;
      document.getElementById('clinicalPatientMeta').textContent = `RUT ${patient.rut} · Próxima atención: ${item.time}`;
      document.getElementById('clinicalDoctor').textContent = item.doctor;
      document.getElementById('clinicalProcedure').textContent = item.procedure;
      document.getElementById('clinicalAllergy').textContent = patient.allergy;
      renderOdontogram();
      renderPayments(item.patient);
    }

    const TOOTH_SHAPES = {
      incisor: { crown: 'M9 53 C9 48 13 46 20 46 C27 46 31 48 31 53 L30.5 79 C30 85 26 88 20 88 C14 88 10 85 9.5 79 Z',
                 roots: ['M13 49 C13 32 16 9 20 5 C24 9 27 32 27 49 Z'], w: 40, scale: [1, 1] },
      lateral: { crown: 'M10 53 C10 48 14 46 20 46 C26 46 30 48 30 53 L29.5 78 C29 84 25 87 20 87 C15 87 11 84 10.5 78 Z',
                 roots: ['M14 49 C14 32 17 11 20 7 C23 11 26 32 26 49 Z'], w: 40, scale: [1, 1] },
      canine: { crown: 'M9 53 C9 48 14 46 20 46 C26 46 31 48 31 53 L29.5 72 C27.5 81 23.5 87 20 90 C16.5 87 12.5 81 10.5 72 Z',
                roots: ['M13 49 C13 30 16 5 20 1 C24 5 27 30 27 49 Z'], w: 40, scale: [1, 1] },
      premolar: { crown: 'M8 53 C8 48 13 46 20 46 C27 46 32 48 32 53 L31 74 C30 82 26.5 85 24 83 C22.5 81.5 21.5 84 20 84 C18.5 84 17.5 81.5 16 83 C13.5 85 10 82 9 74 Z',
                  roots: ['M13 49 C13 32 16 12 20 8 C24 12 27 32 27 49 Z'], w: 40, scale: [1, 1] },
      molarUp: { crown: 'M3 55 C3 49 10 46 20 46 C30 46 37 49 37 55 L36 76 C35 84 31 87 28 85 C25.5 83.5 24 86 20 86 C16 86 14.5 83.5 12 85 C9 87 5 84 4 76 Z',
                 roots: ['M6 51 C6 36 7 20 10 14 C12.5 20 14 36 15.5 51 Z', 'M17 51 C17 38 19 26 20 20 C21 26 23 38 23 51 Z', 'M24.5 51 C26 36 27.5 20 30 14 C33 20 34 36 34 51 Z'], w: 40, scale: [1, 1] },
      molarLow: { crown: 'M3 55 C3 49 10 46 20 46 C30 46 37 49 37 55 L36 76 C35 84 31 87 28 85 C25.5 83.5 24 86 20 86 C16 86 14.5 83.5 12 85 C9 87 5 84 4 76 Z',
                  roots: ['M5 51 C5 35 7 19 11 12 C15 19 17.5 35 18 51 Z', 'M22 51 C22.5 35 25 19 29 12 C33 19 35 35 35 51 Z'], w: 40, scale: [1, 1] }
    };

    function toothShape(number) {
      const pos = number % 10;
      const upper = Math.floor(number / 10) <= 2;
      if (pos === 1) return TOOTH_SHAPES.incisor;
      if (pos === 2) return TOOTH_SHAPES.lateral;
      if (pos === 3) return TOOTH_SHAPES.canine;
      if (pos === 4 || pos === 5) return TOOTH_SHAPES.premolar;
      return upper ? TOOTH_SHAPES.molarUp : TOOTH_SHAPES.molarLow;
    }

    function toothSVG(number, stateName, uid) {
      const upper = Math.floor(number / 10) <= 2;
      const shape = toothShape(number);
      const molar = number % 10 >= 6;
      const clip = `clip-${uid}`;
      const missing = stateName === 'missing';
      const flip = upper ? '' : ' transform="translate(0,90) scale(1,-1)"';
      const rootFill = missing ? 'none' : 'url(#gRoot)';
      const crownFill = missing ? 'none' : (stateName === 'cavity' ? 'url(#gEnamelWarm)' : 'url(#gEnamel)');
      const stroke = missing ? '#b9b4aa' : '#b8ab92';
      const dash = missing ? ' stroke-dasharray="2.5 2.5"' : '';
      const op = missing ? ' opacity=".7"' : '';
      let g = `<g${flip}${op}>`;
      g += shape.roots.map(r => `<path d="${r}" fill="${rootFill}" stroke="${stroke}" stroke-width="1"${dash} stroke-linejoin="round"/>`).join('');
      if (stateName === 'root') {
        const canals = molar ? (shape.roots.length === 3 ? [10.5, 20, 29.5] : [11.5, 28.5]) : [20];
        const tipY = molar ? (shape.roots.length === 3 ? [20, 24, 20] : [20, 20]) : [12];
        g += canals.map((x, i) => `<path d="M${x} 52 L${x} ${tipY[i] || 14}" stroke="#c0453a" stroke-width="2.2" stroke-linecap="round"/><path d="M${x} 52 L${x} ${tipY[i] || 14}" stroke="#f3a79c" stroke-width=".6" stroke-linecap="round"/>`).join('');
      }
      g += `<clipPath id="${clip}"><path d="${shape.crown}"/></clipPath>`;
      g += `<path d="${shape.crown}" fill="${crownFill}" stroke="${stroke}" stroke-width="1.1"${dash} stroke-linejoin="round"/>`;
      if (!missing) {
        g += `<g clip-path="url(#${clip})">`;
        g += `<ellipse cx="14" cy="62" rx="3.2" ry="11" fill="#fff" opacity=".7"/>`;
        g += `<rect x="0" y="76" width="40" height="14" fill="url(#gShade)"/>`;
        if (molar) g += `<path d="M20 52 L20 82 M10 66 L30 66" stroke="#c9bda5" stroke-width=".7" fill="none" opacity=".8"/>`;
        else if (number % 10 >= 4) g += `<path d="M20 54 L20 80" stroke="#c9bda5" stroke-width=".7" fill="none" opacity=".8"/>`;
        if (stateName === 'filled') g += `<rect x="${molar ? 9 : 12}" y="${molar ? 59 : 62}" width="${molar ? 22 : 16}" height="${molar ? 15 : 12}" rx="4" fill="url(#gMetal)" stroke="#5f7683" stroke-width=".8"/><rect x="${molar ? 12 : 15}" y="${molar ? 61 : 64}" width="5" height="3" rx="1.5" fill="#fff" opacity=".6"/>`;
        if (stateName === 'cavity') g += `<path d="M13 64 C13 58 20 57 25 60 C30 63 29 70 26 72 C22 76 15 75 13 70 Z" fill="#4a2a1a" opacity=".92"/><path d="M17 64 C19 62 23 63 24 65" stroke="#8a5a3c" stroke-width="1" fill="none"/>`;
        if (stateName === 'root') g += `<path d="M16 62 C16 58 24 58 24 62 C24 66 16 66 16 62 Z" fill="#7d8a93" stroke="#55646d" stroke-width=".7"/>`;
        g += `</g>`;
        if (stateName === 'observation') g += `<path d="${shape.crown}" fill="none" stroke="#e0a21b" stroke-width="2.4" stroke-linejoin="round"/><circle cx="20" cy="66" r="4" fill="#f2b632" stroke="#b97f06" stroke-width=".8"/>`;
      }
      g += '</g>';
      return `<svg viewBox="0 0 40 90" aria-hidden="true" focusable="false">${g}</svg>`;
    }

    const ODONTO_DEFS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
      <linearGradient id="gEnamel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f6f1e6"/><stop offset="1" stop-color="#e6dcc6"/></linearGradient>
      <linearGradient id="gEnamelWarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbf4e6"/><stop offset="1" stop-color="#e1cfa8"/></linearGradient>
      <linearGradient id="gRoot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e3d5b6"/><stop offset=".5" stop-color="#f1e6cb"/><stop offset="1" stop-color="#d3c19a"/></linearGradient>
      <linearGradient id="gShade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9a98a" stop-opacity="0"/><stop offset="1" stop-color="#b9a98a" stop-opacity=".35"/></linearGradient>
      <linearGradient id="gMetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9e3e8"/><stop offset=".5" stop-color="#9fb2bd"/><stop offset="1" stop-color="#6f8795"/></linearGradient>
    </defs></svg>`;

    function renderOdontogram() {
      const odontogram = document.getElementById('odontogram');
      const states = patientToothStates[state.selectedPatient] || patientToothStates['Paciente A'];
      const archs = [
        { title: 'Arcada superior', halves: [[0, 8, 'Superior derecho'], [8, 16, 'Superior izquierdo']], upper: true },
        { title: 'Arcada inferior', halves: [[16, 24, 'Inferior derecho'], [24, 32, 'Inferior izquierdo']], upper: false }
      ];
      odontogram.innerHTML = ODONTO_DEFS;
      archs.forEach((arch) => {
        const row = document.createElement('div');
        row.className = 'arch ' + (arch.upper ? 'upper' : 'lower');
        arch.halves.forEach(([from, to, label]) => {
          const half = document.createElement('div');
          half.className = 'arch-half';
          const cap = document.createElement('div');
          cap.className = 'arch-caption';
          cap.textContent = label;
          const teeth = document.createElement('div');
          teeth.className = 'arch-teeth';
          for (let index = from; index < to; index++) {
            const number = toothNumbers[index];
            const stateName = states[index];
            const pos = number % 10;
            const stateLabel = toothStateLabels[stateName] || stateName;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'tooth' + (pos >= 6 ? ' wide' : '');
            btn.dataset.state = stateName;
            btn.setAttribute('aria-label', `Diente ${number}, ${toothPositions[pos]} ${toothQuadrants[Math.floor(number / 10)]}, estado: ${stateLabel}`);
            btn.title = `FDI ${number}: ${toothPositions[pos]} ${toothQuadrants[Math.floor(number / 10)]} · ${stateLabel}`;
            btn.innerHTML = `<span class="num">${number}</span>${toothSVG(number, stateName, index)}`;
            btn.classList.toggle('selected', index === state.selectedToothIndex);
            btn.addEventListener('click', () => selectTooth(index));
            teeth.appendChild(btn);
          }
          half.appendChild(cap);
          half.appendChild(teeth);
          row.appendChild(half);
        });
        odontogram.appendChild(row);
      });
    }

    function selectTooth(index) {
      const states = patientToothStates[state.selectedPatient] || patientToothStates['Paciente A'];
      state.selectedToothIndex = index;
      renderOdontogram();
      const number = toothNumbers[index];
      document.getElementById('toothDetail').textContent =
        `Diente FDI ${number}: ${toothPositions[number % 10]} ${toothQuadrants[Math.floor(number / 10)]}. Estado: ${toothStateLabels[states[index]] || states[index]}.`;
      $('toothStateSelect').disabled = false;
      $('toothStateSelect').value = states[index];
      $('toothProcedure').disabled = false;
      const options = number % 10 === 8
        ? ['Evaluación de tercer molar', 'Exodoncia de tercer molar', 'Control de pericoronaritis', 'Evaluación radiográfica de tercer molar']
        : ['Evaluación clínica', 'Sellante / prevención', 'Restauración', 'Endodoncia', 'Exodoncia', 'Control postoperatorio'];
      $('toothProcedure').replaceChildren(new Option('Selecciona opción clínica', ''));
      options.forEach(option => $('toothProcedure').add(new Option(option, option)));
    }

    function updateToothState(value) {
      const index = state.selectedToothIndex;
      if (index == null) return;
      const previous = patientToothStates[state.selectedPatient][index];
      patientToothStates[state.selectedPatient][index] = value;
      if (!saveStoredValue('dienteFelizToothStates', patientToothStates)) {
        patientToothStates[state.selectedPatient][index] = previous;
        $('toothStateSelect').value = previous;
        return;
      }
      const number = toothNumbers[index];
      renderOdontogram();
      $('toothDetail').textContent = `Diente FDI ${number}: ${toothPositions[number % 10]} ${toothQuadrants[Math.floor(number / 10)]}. Estado: ${toothStateLabels[value]}.`;
    }

    function renderTabs() {
      document.querySelectorAll('.tab-button').forEach((button) => {
        const isActive = button.dataset.tab === state.currentTab;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      document.querySelectorAll('.panel').forEach((panel) => {
        const isActive = panel.id === `panel-${state.currentTab}`;
        panel.classList.toggle('active', isActive);
      });
    }

    function bindControls() {
      document.querySelectorAll('.nav-item').forEach((button) => {
        button.addEventListener('click', () => {
          if (button.dataset.view === 'record') $('appShell').dataset.recordOpen = 'false';
          showView(button.dataset.view);
        });
      });

      document.getElementById('summaryPatientSelect').addEventListener('change', (event) => {
        const name = event.target.value;
        if (patients[name]) loadPatient(name);
      });

      document.querySelectorAll('.tab-button').forEach((button) => {
        button.addEventListener('click', () => {
          state.currentTab = button.dataset.tab;
          renderTabs();
        });
      });
    }

    renderAgendaDate();
    renderWeekStrip();
    initAgenda();
    bindControls();
    renderTabs();
    renderOdontogram();
    selectAppointment(appointments.find(item => item.dayOffset === state.selectedDayOffset) || appointments[0]);


    /* ===== Login, vistas, buscador por RUT y agendamiento ===== */
    const $ = (id) => document.getElementById(id);
    $('radiographDate').value = toDateInputValue(new Date());
    const doctors = [
      { name: 'Dr. Soto', spec: 'Endodoncia y ortodoncia', tone: 'green' },
      { name: 'Dra. Pino', spec: 'Odontología general', tone: 'peach' },
      { name: 'Dra. Rivas', spec: 'Estética y prevención', tone: 'blue' }
    ];
    const procedureOptions = ['Control preventivo', 'Limpieza dental', 'Evaluación inicial', 'Endodoncia', 'Restauración dental', 'Blanqueamiento', 'Evaluación de ortodoncia', 'Extracción', 'Evaluación de tercer molar', 'Exodoncia de tercer molar', 'Control de pericoronaritis'];
    const viewTitles = {
      home: 'Inicio', agenda: 'Agenda', patients: 'Pacientes', record: 'Ficha clínica', summary: 'Resumen médico', payments: 'Presupuestos y pagos',
      dashboard: 'Dashboard', reports: 'Reportes', users: 'Usuarios', doctors: 'Doctores y horarios',
      branches: 'Sucursales', boxes: 'Box', inventory: 'Inventario clínico', agreements: 'Convenios', fees: 'Aranceles', audit: 'Auditoría'
    };
    const normRut = (v) => v.replace(/[^0-9kK]/g, '').toUpperCase();
    const saveStoredValue = (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error(`No se pudo guardar ${key} en el navegador.`, error);
        if (typeof showToast === 'function') showToast('No se pudieron guardar los cambios en este navegador.');
        return false;
      }
    };
    const readStoredValue = (key, fallback) => {
      try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : fallback;
      } catch (error) {
        console.error(`No se pudo leer ${key} del navegador.`, error);
        return fallback;
      }
    };
    const isValidRut = (value) => {
      const rawRut = String(value || '').trim();
      if (!/^[\d.\-\sKk]+$/.test(rawRut)) return false;
      const rut = normRut(rawRut);
      if (rut.length < 8 || rut.length > 9 || !/^\d+[0-9K]$/.test(rut)) return false;
      const body = rut.slice(0, -1);
      if (Number(body) === 0 || /^0/.test(body)) return false;
      let sum = 0, multiplier = 2;
      for (let index = body.length - 1; index >= 0; index -= 1) {
        sum += Number(body[index]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
      }
      const remainder = 11 - (sum % 11);
      const expected = remainder === 11 ? '0' : remainder === 10 ? 'K' : String(remainder);
      return rut.slice(-1) === expected;
    };
    const formatRut = (value) => {
      const rut = normRut(String(value || ''));
      if (rut.length < 2) return rut;
      const body = rut.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return `${body}-${rut.slice(-1)}`;
    };
    const savedPatientsValue = readStoredValue('dienteFelizPatients', {});
    const savedPatients = savedPatientsValue && typeof savedPatientsValue === 'object' && !Array.isArray(savedPatientsValue) ? savedPatientsValue : {};
    Object.entries(savedPatients).forEach(([name, patient]) => {
      if (patient && isValidRut(patient.rut)) {
        const migrated = { ...patient };
        if (['penicilina', 'latex', 'látex', 'ibuprofeno', 'sulfas', 'ninguna'].includes(String(migrated.allergy || '').trim().toLowerCase())) {
          migrated.allergy = 'No registrada';
        }
        if (patients[name]) {
          Object.assign(patients[name], migrated);
        } else {
          patients[name] = {
            bruxism: 'No registrado',
            medications: 'No registrados',
            illnesses: 'No registradas',
            cleaning: 'No registrada',
            ...migrated
          };
          patientToothStates[name] = Array.from({ length: 32 }, () => 'healthy');
        }
      }
    });
    const deletedPatientNamesValue = readStoredValue('dienteFelizDeletedPatients', []);
    const deletedPatientNames = new Set(
      Array.isArray(deletedPatientNamesValue)
        ? deletedPatientNamesValue.filter(name => typeof name === 'string').map(name => patientNameMap[name] || name)
        : []
    );
    deletedPatientNames.forEach(name => {
      delete patients[name];
      delete patientToothStates[name];
      delete paymentsByPatient[name];
      Object.entries(patientNameMap).forEach(([legacyName, currentName]) => {
        if (currentName === name) {
          delete patients[legacyName];
          delete patientToothStates[legacyName];
          delete paymentsByPatient[legacyName];
        }
      });
    });
    appointments.splice(0, appointments.length, ...appointments.filter(item => !deletedPatientNames.has(item.patient)));
    completedVisits.splice(0, completedVisits.length, ...completedVisits.filter(item => !deletedPatientNames.has(item.patient)));
    const allowedToothStates = ['healthy', 'filled', 'root', 'missing', 'cavity', 'observation'];
    const savedToothStatesValue = readStoredValue('dienteFelizToothStates', {});
    const savedToothStates = savedToothStatesValue && typeof savedToothStatesValue === 'object' && !Array.isArray(savedToothStatesValue) ? savedToothStatesValue : {};
    Object.entries(savedToothStates).forEach(([name, teeth]) => {
      if (patientToothStates[name] && Array.isArray(teeth) && teeth.length === 32 && teeth.every(value => allowedToothStates.includes(value))) {
        patientToothStates[name] = [...teeth];
      }
    });
    const inventoryCatalog = [
      { id: 'gloves', name: 'Guantes de nitrilo', unit: 'caja', stock: 18, minimum: 6 },
      { id: 'masks', name: 'Mascarillas quirúrgicas', unit: 'caja', stock: 12, minimum: 4 },
      { id: 'anesthetic', name: 'Anestesia local', unit: 'tubos', stock: 45, minimum: 15 },
      { id: 'needles', name: 'Agujas dentales', unit: 'unidades', stock: 80, minimum: 25 },
      { id: 'composite', name: 'Resina compuesta', unit: 'jeringas', stock: 9, minimum: 4 },
      { id: 'sterile-kits', name: 'Sets de instrumental estéril', unit: 'sets', stock: 16, minimum: 6 },
      { id: 'suction-tips', name: 'Puntas de aspiración', unit: 'unidades', stock: 30, minimum: 10 }
    ];
    const storedInventoryValue = readStoredValue('dienteFelizInventory', {});
    const storedInventoryData = storedInventoryValue && typeof storedInventoryValue === 'object' && !Array.isArray(storedInventoryValue) ? storedInventoryValue : {};
    const storedInventory = storedInventoryData.stock && typeof storedInventoryData.stock === 'object' ? storedInventoryData.stock : storedInventoryData;
    const inventoryTransactions = Array.isArray(storedInventoryData.transactions)
      ? storedInventoryData.transactions.filter(entry => entry && typeof entry.itemId === 'string' &&
        ['use', 'restock'].includes(entry.action) && Number.isInteger(entry.quantity) && entry.quantity > 0 &&
        Number.isInteger(entry.stockAfter) && entry.stockAfter >= 0 && Number.isFinite(Date.parse(entry.createdAt)))
      : [];
    const inventory = inventoryCatalog.map(item => ({
      ...item,
      stock: Number.isInteger(storedInventory[item.id]) && storedInventory[item.id] >= 0 ? storedInventory[item.id] : item.stock
    }));
    const consentRecordsValue = readStoredValue('dienteFelizConsents', {});
    const consentRecords = consentRecordsValue && typeof consentRecordsValue === 'object' && !Array.isArray(consentRecordsValue) ? consentRecordsValue : {};
    const radiographsValue = readStoredValue('dienteFelizRadiographs', {});
    const radiographsData = radiographsValue && typeof radiographsValue === 'object' && !Array.isArray(radiographsValue) ? radiographsValue : {};
    const radiographsByPatient = {};
    let editingRadiographIndex = null;
    Object.entries(radiographsData).forEach(([name, records]) => {
      if (!patients[name] || !Array.isArray(records)) return;
      radiographsByPatient[name] = records.filter(record =>
        record && typeof record.type === 'string' && typeof record.area === 'string' &&
        typeof record.notes === 'string' && typeof record.date === 'string' &&
        !Number.isNaN(Date.parse(`${record.date}T12:00:00`))
      );
    });
    const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const fmtMin = (m) => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
    const findByRut = (v) => { const q = normRut(v); return isValidRut(v) ? Object.keys(patients).find(n => normRut(patients[n].rut) === q) || null : null; };
    const searchPatients = (v) => { const q = normRut(v); return Object.keys(patients).filter(n => !q || normRut(patients[n].rut).includes(q)); };

    function showView(view, options = {}) {
      if (!viewTitles[view]) return;
      const currentRecordOpen = $('appShell').dataset.recordOpen === 'true';
      const nextRecordOpen = view === 'record' && options.recordOpen === true;
      const routeChanged = view !== state.activeView || currentRecordOpen !== nextRecordOpen;
      if (!state.browserHistoryReady) {
        window.history.replaceState({ dienteFelizView: state.activeView, dienteFelizRecordOpen: false, dienteFelizIndex: 0 }, '', '#home');
        state.browserHistoryReady = true;
      }
      if (routeChanged && !options.fromHistory) {
        state.navigationHistory.push({ view: state.activeView, recordOpen: currentRecordOpen });
        const route = nextRecordOpen ? 'record-detail' : view;
        state.browserHistoryIndex += 1;
        window.history.pushState({ dienteFelizView: view, dienteFelizRecordOpen: nextRecordOpen, dienteFelizIndex: state.browserHistoryIndex }, '', `#${route}`);
      }
      $('appShell').dataset.recordOpen = String(nextRecordOpen);
      $('appShell').dataset.view = view;
      state.activeView = view;
      $('viewTitle').textContent = viewTitles[view];
      $('backButton').hidden = state.navigationHistory.length === 0;
      document.querySelectorAll('.nav-item').forEach((b) => {
        const on = b.dataset.view === view;
        b.classList.toggle('active', on);
        if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
      });
      window.scrollTo(0, 0);
    }

    window.addEventListener('popstate', event => {
      const currentIndex = state.browserHistoryIndex;
      const nextIndex = event.state && Number.isInteger(event.state.dienteFelizIndex)
        ? event.state.dienteFelizIndex
        : currentIndex - 1;
      if (nextIndex < currentIndex) state.navigationHistory.pop();
      else if (nextIndex > currentIndex) {
        state.navigationHistory.push({
          view: state.activeView,
          recordOpen: $('appShell').dataset.recordOpen === 'true'
        });
      }
      state.browserHistoryIndex = nextIndex;
      const previous = state.navigationHistory[state.navigationHistory.length - 1];
      const view = event.state && viewTitles[event.state.dienteFelizView]
        ? event.state.dienteFelizView
        : previous ? previous.view : 'home';
      const recordOpen = Boolean(event.state && event.state.dienteFelizRecordOpen);
      showView(view, { fromHistory: true, recordOpen });
    });

    function loadPatient(name) {
      state.selectedPatient = name;
      const p = patients[name];
      const next = appointments.filter(a => a.patient === name).sort((a, b) => a.dayOffset - b.dayOffset || a.startMinutes - b.startMinutes)[0];
      $('recordName').textContent = name;
      $('recordMeta').textContent = `RUT ${p.rut} · Alergia: ${p.allergy}`;
      $('clinicalPatientName').textContent = name;
      $('clinicalPatientMeta').textContent = `RUT ${p.rut} · ${next ? 'Próxima atención: ' + next.time : 'Sin citas próximas'}`;
      $('summaryPatientSelect').value = name;
      $('clinicalDoctor').textContent = p.doctor;
      $('clinicalProcedure').textContent = next ? next.procedure : paymentsByPatient[name].treatment;
      $('clinicalAllergy').textContent = p.allergy;
      $('patientContact').innerHTML = `<span><strong>Teléfono:</strong> ${escapeHtml(p.phone || 'Sin registrar')}</span><span><strong>Correo:</strong> ${escapeHtml(p.email || 'Sin registrar')}</span>`;
      const antecedentFields = [
        ['Alergias', p.allergy || 'No registrada'],
        ['Bruxismo o hábitos parafuncionales', p.bruxism || 'No registrado'],
        ['Medicamentos', p.medications || 'No registrados'],
        ['Enfermedades relevantes', p.illnesses || 'No registradas'],
        ['Última limpieza profesional', p.cleaning || 'No registrada']
      ];
      const antecedents = $('patientAntecedents');
      if (antecedents) {
        antecedents.replaceChildren();
        antecedentFields.forEach(([label, value]) => {
          const item = document.createElement('div');
          item.className = 'list-item antecedent-item';
          const title = document.createElement('strong');
          title.textContent = `${label}: `;
          item.append(title, document.createTextNode(value));
          antecedents.appendChild(item);
        });
      }
      renderPatientHistory(name);
      renderRadiographs(name);
      $('toothDetail').textContent = 'Selecciona un diente para ver su número FDI y estado.';
      $('toothStateSelect').disabled = true;
      $('toothProcedure').disabled = true;
      $('toothProcedure').value = '';
      state.selectedToothIndex = null;
      renderOdontogram();
      renderPayments(name);
      renderConsentHistory(name);
    }

    function renderRadiographs(name) {
      const history = $('radiographHistory');
      history.replaceChildren();
      const records = radiographsByPatient[name] || [];
      if (!records.length) {
        const empty = document.createElement('div');
        empty.className = 'list-item';
        empty.textContent = 'No hay estudios de rayos X registrados para este paciente.';
        history.appendChild(empty);
        return;
      }

      records.slice().reverse().forEach((record, reverseIndex) => {
        const index = records.length - reverseIndex - 1;
        const entry = document.createElement('div');
        entry.className = 'list-item radiograph-record';
        const title = document.createElement('strong');
        title.textContent = `${record.type} · ${record.area}`;
        const date = document.createElement('time');
        date.dateTime = record.date;
        date.textContent = new Date(`${record.date}T12:00:00`).toLocaleDateString('es-CL', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        const notes = document.createElement('p');
        notes.textContent = record.notes;
        const actions = document.createElement('div');
        actions.className = 'radiograph-record-actions';
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.className = 'btn-sm';
        edit.dataset.editRadiograph = String(index);
        edit.textContent = 'Modificar';
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'btn-sm danger-button';
        remove.dataset.deleteRadiograph = String(index);
        remove.textContent = 'Eliminar';
        actions.append(edit, remove);
        entry.append(title, date, notes, actions);
        history.appendChild(entry);
      });
    }

    function resetRadiographForm() {
      editingRadiographIndex = null;
      $('radiographForm').reset();
      $('radiographDate').value = toDateInputValue(new Date());
      $('saveRadiograph').textContent = 'Guardar estudio';
      $('cancelRadiographEdit').hidden = true;
      $('radiographStatus').textContent = 'Los estudios guardados aparecerán en el historial de este paciente.';
      $('radiographError').textContent = '';
    }

    function editRadiograph(index) {
      const record = (radiographsByPatient[state.selectedPatient] || [])[index];
      if (!record) return showToast('No se encontró el estudio seleccionado.');
      editingRadiographIndex = index;
      $('radiographType').value = record.type;
      $('radiographDate').value = record.date;
      $('radiographArea').value = record.area;
      $('radiographNotes').value = record.notes;
      $('saveRadiograph').textContent = 'Guardar cambios';
      $('cancelRadiographEdit').hidden = false;
      $('radiographStatus').textContent = 'Editando estudio existente.';
      $('radiographType').focus();
    }

    function deleteRadiograph(index) {
      const records = radiographsByPatient[state.selectedPatient] || [];
      const record = records[index];
      if (!record) return showToast('No se encontró el estudio seleccionado.');
      openConfirmation({
        title: '¿Eliminar este estudio?',
        message: `Se eliminará ${record.type} de ${new Date(`${record.date}T12:00:00`).toLocaleDateString('es-CL')}. Esta acción no se puede deshacer.`,
        onConfirm: () => {
          const [removed] = records.splice(index, 1);
          if (!records.length) delete radiographsByPatient[state.selectedPatient];
          if (!saveStoredValue('dienteFelizRadiographs', radiographsByPatient)) {
            if (!radiographsByPatient[state.selectedPatient]) radiographsByPatient[state.selectedPatient] = [];
            radiographsByPatient[state.selectedPatient].splice(index, 0, removed);
            return;
          }
          if (editingRadiographIndex === index) resetRadiographForm();
          else if (editingRadiographIndex !== null && editingRadiographIndex > index) editingRadiographIndex -= 1;
          renderRadiographs(state.selectedPatient);
          showToast('Estudio de rayos X eliminado.');
        }
      });
    }

    function saveRadiograph(event) {
      event.preventDefault();
      const error = $('radiographError');
      error.textContent = '';
      const record = {
        type: $('radiographType').value.trim(),
        date: $('radiographDate').value,
        area: $('radiographArea').value.trim(),
        notes: $('radiographNotes').value.trim()
      };
      if (!record.type || !record.date || !record.area || !record.notes) {
        error.textContent = 'Completa el tipo de estudio, la fecha, la zona y las observaciones.';
        return;
      }

      const records = radiographsByPatient[state.selectedPatient] || [];
      const previousRecord = editingRadiographIndex === null ? null : records[editingRadiographIndex];
      if (editingRadiographIndex !== null && !previousRecord) {
        error.textContent = 'No se encontró el estudio que intentas modificar. Actualiza la ficha y vuelve a intentar.';
        resetRadiographForm();
        return;
      }
      if (editingRadiographIndex === null) records.push(record);
      else records[editingRadiographIndex] = record;
      radiographsByPatient[state.selectedPatient] = records;
      if (!saveStoredValue('dienteFelizRadiographs', radiographsByPatient)) {
        if (editingRadiographIndex === null) records.pop();
        else records[editingRadiographIndex] = previousRecord;
        if (!records.length) delete radiographsByPatient[state.selectedPatient];
        return;
      }

      renderRadiographs(state.selectedPatient);
      const updated = editingRadiographIndex !== null;
      resetRadiographForm();
      showToast(updated ? 'Estudio de rayos X actualizado.' : 'Estudio de rayos X registrado.');
    }
    const openRecord = (name, view = 'record') => {
      if (state.selectedPatient !== name) resetRadiographForm();
      loadPatient(name);
      showView(view, { recordOpen: view === 'record' });
    };

    function renderPatientHistory(name) {
      const rows = $('patientHistoryRows');
      rows.innerHTML = '';
      const history = [...completedVisits, ...appointments].filter(item => item.patient === name)
        .sort((a, b) => b.dayOffset - a.dayOffset || (a.startMinutes || 0) - (b.startMinutes || 0));
      if (!history.length) {
        rows.innerHTML = '<tr><td colspan="6" class="pay-empty">Este paciente aún no tiene citas registradas.</td></tr>';
        return;
      }
      history.forEach((item) => {
        const row = document.createElement('tr');
        const values = [
          new Intl.DateTimeFormat('es-CL', { dateStyle: 'medium' }).format(getAgendaDate(item.dayOffset)),
          item.time, item.doctor, item.procedure, `${item.branch || branchByBox[item.box]} · ${item.box}`, item.completed ? 'Realizada' : 'Agendada'
        ];
        values.forEach((value) => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });
        rows.appendChild(row);
      });
    }

    function renderPatientList() {
      const list = searchPatients($('rutSearch').value);
      const rows = $('patientRows');
      rows.innerHTML = '';
      $('patientCount').textContent = `${list.length} de ${Object.keys(patients).length} pacientes`;
      if (!list.length) {
        rows.innerHTML = '<tr><td colspan="5" class="pay-empty">No se encontró ningún paciente con ese RUT.</td></tr>';
        return;
      }
      list.forEach((name) => {
        const p = patients[name];
        const tr = document.createElement('tr');
        tr.dataset.patient = name;
        tr.innerHTML = `<td><strong>${escapeHtml(name)}</strong></td><td>${escapeHtml(p.rut)}</td><td>${escapeHtml(p.doctor)}</td><td>${escapeHtml(p.allergy)}</td>
          <td class="row-actions"><button type="button" class="btn-sm" data-act="record">Ficha</button><button type="button" class="btn-sm" data-act="pay">Pagos</button><button type="button" class="btn-sm primary" data-act="book">Agendar</button></td>`;
        tr.querySelector('[data-act="record"]').addEventListener('click', () => openRecord(name));
        tr.querySelector('[data-act="pay"]').addEventListener('click', () => openRecord(name, 'payments'));
        tr.querySelector('[data-act="book"]').addEventListener('click', () => openApptModal(name));
        rows.appendChild(tr);
      });
    }

    function renderClinicalPatientList() {
      const rows = $('clinicalPatientRows');
      const query = $('clinicalRutSearch').value;
      const names = searchPatients(query);
      rows.replaceChildren();
      $('clinicalPatientCount').textContent = `${names.length} de ${Object.keys(patients).length} fichas`;
      if (!names.length) {
        rows.innerHTML = '<tr><td colspan="6" class="pay-empty">No se encontraron fichas para ese RUT.</td></tr>';
        return;
      }
      names.forEach(name => {
        const patient = patients[name];
        const row = document.createElement('tr');
        row.innerHTML = `<td><strong>${escapeHtml(name)}</strong></td><td>${escapeHtml(patient.rut)}</td><td>${escapeHtml(patient.phone || 'Sin teléfono')}<br>${escapeHtml(patient.email || 'Sin correo')}</td><td>${escapeHtml(patient.doctor)}</td><td>${escapeHtml(patient.allergy)}</td><td class="row-actions"><button class="btn-sm primary" type="button" data-open-clinical-record="${escapeHtml(name)}">Ver ficha</button><button class="btn-sm danger-button" type="button" data-delete-patient="${escapeHtml(name)}">Eliminar</button></td>`;
        rows.appendChild(row);
      });
    }

    function renderSummaryPatientSelect() {
      const select = $('summaryPatientSelect');
      const names = Object.keys(patients).sort((a, b) => a.localeCompare(b, 'es'));
      select.replaceChildren();
      names.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
      });
      if (names.length) {
        const selectedName = patients[state.selectedPatient] ? state.selectedPatient : names[0];
        select.value = selectedName;
      }
    }

    function renderInventory() {
      const rows = $('inventoryRows');
      rows.replaceChildren();
      inventory.forEach(item => {
        const row = document.createElement('tr');
        const status = item.stock <= item.minimum
          ? '<span class="inventory-low">Reponer</span>'
          : '<span class="inventory-ok">Disponible</span>';
        row.innerHTML = `<td><strong>${escapeHtml(item.name)}</strong></td><td>${escapeHtml(item.unit)}</td><td>${item.stock}</td><td>${item.minimum}</td><td>${status}</td><td><div class="inventory-action"><input type="number" min="1" step="1" value="1" aria-label="Cantidad de ${escapeHtml(item.name)}"><button class="btn-sm" type="button" data-inventory-action="use" data-inventory-id="${item.id}">Registrar uso</button><button class="btn-sm" type="button" data-inventory-action="restock" data-inventory-id="${item.id}">Reponer</button></div></td>`;
        rows.appendChild(row);
      });
      const history = $('inventoryHistory');
      history.replaceChildren();
      inventoryTransactions.slice().reverse().slice(0, 30).forEach(entry => {
        const item = inventory.find(candidate => candidate.id === entry.itemId);
        if (!item) return;
        const row = document.createElement('tr');
        const values = [
          new Date(entry.createdAt).toLocaleString('es-CL'),
          entry.action === 'use' ? 'Consumo' : 'Reposición',
          item.name,
          `${entry.quantity} ${item.unit}`,
          String(entry.stockAfter)
        ];
        values.forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });
        history.appendChild(row);
      });
      if (!history.children.length) history.innerHTML = '<tr><td class="pay-empty" colspan="5">Aún no hay movimientos de inventario.</td></tr>';
    }

    function renderConsentHistory(name) {
      const list = $('consentHistory');
      if (!list) return;
      list.replaceChildren();
      const records = Array.isArray(consentRecords[name]) ? consentRecords[name] : [];
      if (!records.length) {
        const empty = document.createElement('div');
        empty.className = 'list-item';
        empty.textContent = 'Aún no hay consentimientos verificados para este paciente.';
        list.appendChild(empty);
        return;
      }
      records.slice().reverse().forEach(record => {
        const entry = document.createElement('div');
        entry.className = 'list-item';
        entry.textContent = `${record.procedure} · firmado por ${name} · ${new Date(record.createdAt).toLocaleString('es-CL')}`;
        list.appendChild(entry);
      });
    }

    function openPatientEditor() {
      const patient = patients[state.selectedPatient];
      if (!patient) return showToast('Selecciona un paciente antes de modificar su ficha.');
      $('patientRut').value = patient.rut;
      $('patientPhone').value = patient.phone || '';
      $('patientEmail').value = patient.email || '';
      $('patientAllergy').value = patient.allergy || '';
      $('patientBruxism').value = patient.bruxism || '';
      $('patientMedications').value = patient.medications || '';
      $('patientIllnesses').value = patient.illnesses || '';
      $('patientCleaning').value = patient.cleaning || '';
      fillSelect('patientDoctor', doctors.map(doctor => [doctor.name, doctor.name]), patient.doctor);
      $('patientError').textContent = '';
      $('patientModal').hidden = false;
      $('patientRut').dispatchEvent(new Event('input'));
      $('patientRut').focus();
    }

    function savePatient(e) {
      e.preventDefault();
      const patient = patients[state.selectedPatient];
      const rut = $('patientRut').value.trim();
      const phone = $('patientPhone').value.trim();
      const email = $('patientEmail').value.trim();
      const phoneDigits = phone.replace(/\D/g, '');
      const validPhone = (phoneDigits.length === 9 && phoneDigits.startsWith('9')) ||
        (phoneDigits.length === 11 && phoneDigits.startsWith('569'));
      const showError = message => { $('patientError').textContent = message; };
      if (!isValidRut(rut)) return showError('Ingresa un RUT chileno válido con dígito verificador correcto.');
      if (Object.entries(patients).some(([name, other]) => name !== state.selectedPatient && normRut(other.rut) === normRut(rut))) {
        return showError('Este RUT ya está registrado en otra ficha.');
      }
      if (!validPhone) return showError('Ingresa un teléfono celular chileno válido (9 dígitos o +56 9).');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Ingresa un correo electrónico válido o deja el campo vacío.');
      if (!$('patientAllergy').value.trim()) return showError('Indica las alergias o escribe “Ninguna conocida”.');
      if (!$('patientDoctor').value) return showError('Selecciona al profesional responsable.');
      const previousValues = { ...patient };
      Object.assign(patient, {
        rut: formatRut(rut),
        phone,
        email,
        allergy: $('patientAllergy').value.trim(),
        bruxism: $('patientBruxism').value.trim(),
        medications: $('patientMedications').value.trim(),
        illnesses: $('patientIllnesses').value.trim(),
        cleaning: $('patientCleaning').value.trim(),
        doctor: $('patientDoctor').value
      });
      if (!saveStoredValue('dienteFelizPatients', patients)) {
        Object.assign(patient, previousValues);
        return;
      }
      renderPatientList();
      renderClinicalPatientList();
      renderReportRows();
      loadPatient(state.selectedPatient);
      $('patientModal').hidden = true;
      showToast('Ficha clínica actualizada.');
    }

    function deletePatientRecord(name) {
      const patient = patients[name];
      if (!patient) return showToast('No se encontró la ficha seleccionada.');
      openConfirmation({
        title: '¿Eliminar esta ficha clínica?',
        message: `Se eliminará la ficha de ${name}, junto con su odontograma, antecedentes, estudios de rayos X, consentimientos, información de pagos e historial de citas. Esta acción no se puede deshacer.`,
        confirmLabel: 'Eliminar ficha',
        onConfirm: () => {
          const nextPatients = { ...patients };
          const nextToothStates = { ...patientToothStates };
          const nextPayments = { ...paymentsByPatient };
          const nextConsents = { ...consentRecords };
          const nextRadiographs = { ...radiographsByPatient };
          delete nextPatients[name];
          delete nextToothStates[name];
          delete nextPayments[name];
          delete nextConsents[name];
          delete nextRadiographs[name];
          Object.entries(patientNameMap).forEach(([legacyName, currentName]) => {
            if (currentName !== name) return;
            delete nextPatients[legacyName];
            delete nextToothStates[legacyName];
            delete nextPayments[legacyName];
          });
          const nextDeletedNames = [...new Set([...deletedPatientNames, name])];
          const updates = new Map([
            ['dienteFelizPatients', nextPatients],
            ['dienteFelizToothStates', nextToothStates],
            ['dienteFelizConsents', nextConsents],
            ['dienteFelizRadiographs', nextRadiographs],
            ['dienteFelizDeletedPatients', nextDeletedNames]
          ]);
          const previousValues = new Map();
          try {
            updates.forEach((_value, key) => previousValues.set(key, localStorage.getItem(key)));
            updates.forEach((value, key) => localStorage.setItem(key, JSON.stringify(value)));
          } catch (error) {
            console.error('No se pudo eliminar la ficha clínica del almacenamiento local.', error);
            for (const [key, value] of [...previousValues].reverse()) {
              try {
                if (value === null) localStorage.removeItem(key);
                else localStorage.setItem(key, value);
              } catch (rollbackError) {
                console.error(`No se pudo restaurar ${key} después de cancelar la eliminación.`, rollbackError);
              }
            }
            return showToast('No se pudo eliminar la ficha. Revisa el almacenamiento del navegador e inténtalo nuevamente.');
          }

          Object.keys(patients).forEach(key => { if (!(key in nextPatients)) delete patients[key]; });
          delete patientToothStates[name];
          delete paymentsByPatient[name];
          delete consentRecords[name];
          delete radiographsByPatient[name];
          Object.entries(patientNameMap).forEach(([legacyName, currentName]) => {
            if (currentName !== name) return;
            delete patients[legacyName];
            delete patientToothStates[legacyName];
            delete paymentsByPatient[legacyName];
          });
          deletedPatientNames.add(name);
          for (let index = appointments.length - 1; index >= 0; index -= 1) {
            if (appointments[index].patient === name) appointments.splice(index, 1);
          }
          for (let index = completedVisits.length - 1; index >= 0; index -= 1) {
            if (completedVisits[index].patient === name) completedVisits.splice(index, 1);
          }

          editingRadiographIndex = null;
          resetRadiographForm();
          state.selectedAppointmentId = null;
          state.selectedPatient = Object.keys(patients)[0] || '';
          renderPatientList();
          renderClinicalPatientList();
          renderReportRows();
          renderDashboard();
          renderWeekStrip();
          renderAgendaDate();
          initAgenda();
          if (state.selectedPatient) {
            loadPatient(state.selectedPatient);
          } else {
            showView('record', { recordOpen: false });
          }
          showView('record', { recordOpen: false });
          state.navigationHistory = state.navigationHistory.filter(entry => !(entry.view === 'record' && entry.recordOpen));
          $('backButton').hidden = state.navigationHistory.length === 0;
          window.history.replaceState({
            dienteFelizView: 'record',
            dienteFelizRecordOpen: false,
            dienteFelizIndex: state.browserHistoryIndex
          }, '', '#record');
          showToast(`Ficha de ${name} eliminada.`);
        }
      });
    }

    function renderDashboard() {
      const count = Object.keys(patients).length;
      const todayCount = appointments.filter(item => item.dayOffset === state.selectedDayOffset).length;
      $('homeAppointments').textContent = String(todayCount);
      $('homePatients').textContent = String(count);
      $('dashboardAppointments').textContent = String(appointments.length);
      $('dashboardPatients').textContent = String(count);
      $('homeUser').textContent = $('userName').textContent;
      const upcomingRows = $('homeUpcomingRows');
      upcomingRows.innerHTML = '';
      appointments.filter(item => item.dayOffset === state.selectedDayOffset)
        .sort((a, b) => a.startMinutes - b.startMinutes).slice(0, 5).forEach(item => {
          const row = document.createElement('tr');
          [item.time, item.patient, item.doctor, item.procedure].forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
          });
          upcomingRows.appendChild(row);
        });
      if (!upcomingRows.children.length) upcomingRows.innerHTML = '<tr><td class="pay-empty" colspan="4">No hay citas para el día seleccionado.</td></tr>';
    }

    function renderReportRows() {
      if (!$('reportRows')) return;
      const query = normRut($('reportRut').value);
      const names = Object.keys(patients).filter(name => !query || normRut(patients[name].rut).includes(query));
      const rows = $('reportRows');
      rows.innerHTML = '';
      $('reportCount').textContent = `${names.length} pacientes`;
      names.forEach(name => {
        const patient = patients[name];
        const history = [...completedVisits, ...appointments].filter(item => item.patient === name).sort((a, b) => b.dayOffset - a.dayOffset);
        const last = history.find(item => item.completed) || history[0];
        const row = document.createElement('tr');
        row.innerHTML = `<td><strong>${escapeHtml(name)}</strong></td><td>${escapeHtml(patient.rut)}</td><td>${escapeHtml(patient.phone || 'Sin teléfono')}<br>${escapeHtml(patient.email || 'Sin correo')}</td><td>${history.length}</td><td>${escapeHtml(last ? last.procedure : 'Sin atenciones')}</td><td><button class="btn-sm" type="button" data-report-patient>Ver ficha</button></td>`;
        row.querySelector('[data-report-patient]').addEventListener('click', () => openRecord(name));
        rows.appendChild(row);
      });
      if (!names.length) rows.innerHTML = '<tr><td colspan="6" class="pay-empty">No se encontraron pacientes para ese RUT.</td></tr>';
    }

    function downloadPatientExcel(patientNames, filename) {
      const rows = [];
      patientNames.forEach(name => {
        const patient = patients[name];
        const history = [...completedVisits, ...appointments].filter(item => item.patient === name);
        if (!history.length) {
          rows.push([name, patient.rut, patient.phone || '', patient.email || '', patient.allergy, '', '', '', '', '', '']);
          return;
        }
        history.forEach(item => rows.push([
          name, patient.rut, patient.phone || '', patient.email || '', patient.allergy,
          new Intl.DateTimeFormat('es-CL', { dateStyle: 'medium' }).format(getAgendaDate(item.dayOffset)),
          item.time, item.doctor, item.procedure, `${item.branch || branchByBox[item.box]} · ${item.box}`, item.completed ? 'Realizada' : 'Agendada'
        ]));
      });
      const headers = ['Paciente', 'RUT', 'Teléfono', 'Correo', 'Alergias', 'Fecha de atención', 'Hora', 'Profesional', 'Tratamiento', 'Sucursal y box', 'Estado'];
      const headerHtml = `<tr>${headers.map(value => `<th>${escapeHtml(value)}</th>`).join('')}</tr>`;
      const bodyHtml = rows.map(row => `<tr>${row.map(value => `<td>${escapeHtml(value)}</td>`).join('')}</tr>`).join('');
      const html = `<!doctype html><html><head><meta charset="utf-8"></head><body><table border="1"><thead>${headerHtml}</thead><tbody>${bodyHtml}</tbody></table></body></html>`;
      const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      showToast(`Exportación Excel generada: ${patientNames.length} ficha(s).`);
    }

    function renderGlobalResults() {
      const box = $('globalResults');
      const q = normRut($('globalRut').value);
      box.innerHTML = '';
      if (!q) { box.hidden = true; return; }
      const list = searchPatients($('globalRut').value).slice(0, 5);
      if (!list.length) box.innerHTML = '<div class="sr-empty">Sin resultados para ese RUT</div>';
      list.forEach((name) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.innerHTML = `<strong>${escapeHtml(name)}</strong><span>${escapeHtml(patients[name].rut)}</span>`;
        b.addEventListener('click', () => { $('globalRut').value = ''; box.hidden = true; openRecord(name); });
        box.appendChild(b);
      });
      box.hidden = false;
    }

    function fillSelect(id, options, selected) {
      const el = $(id);
      el.innerHTML = '';
      options.forEach(([value, label]) => {
        const o = document.createElement('option');
        o.value = value; o.textContent = label;
        if (String(value) === String(selected)) o.selected = true;
        el.appendChild(o);
      });
    }

    function renderBranchCards() {
      const container = $('branchCards');
      container.replaceChildren();
      branchDetails.forEach((branch, branchIndex) => {
        const card = document.createElement('article');
        card.className = 'management-card branch-card';
        card.innerHTML = `<h3>${escapeHtml(branch.name)}</h3><p>${escapeHtml(branch.address)} · ${escapeHtml(branch.phone)}</p><h4>Horario de atención</h4>`;
        const scheduleList = document.createElement('div');
        scheduleList.className = 'branch-schedule-list';
        const schedules = branchSchedules[branch.name] || [];
        schedules.forEach((schedule, scheduleIndex) => {
          const row = document.createElement('div');
          row.className = 'branch-schedule-row';
          row.dataset.branchIndex = String(branchIndex);
          row.dataset.scheduleIndex = String(scheduleIndex);
          const day = document.createElement('select');
          day.setAttribute('aria-label', `Día de atención para ${branch.name}`);
          weekdayNames.forEach((weekday) => {
            const option = document.createElement('option');
            option.value = weekday;
            option.textContent = weekday;
            option.selected = weekday === schedule.day;
            day.appendChild(option);
          });
          day.dataset.scheduleDay = '';
          const start = document.createElement('input');
          start.type = 'time';
          start.value = schedule.start;
          start.setAttribute('aria-label', `Hora de apertura ${schedule.day}`);
          start.dataset.scheduleStart = '';
          const end = document.createElement('input');
          end.type = 'time';
          end.value = schedule.end;
          end.setAttribute('aria-label', `Hora de cierre ${schedule.day}`);
          end.dataset.scheduleEnd = '';
          const save = document.createElement('button');
          save.type = 'button';
          save.className = 'btn-sm';
          save.textContent = 'Guardar';
          save.dataset.saveSchedule = '';
          const remove = document.createElement('button');
          remove.type = 'button';
          remove.className = 'btn-sm schedule-remove';
          remove.textContent = 'Quitar día';
          remove.dataset.deleteSchedule = '';
          row.append(day, start, end, save, remove);
          scheduleList.appendChild(row);
        });
        if (!schedules.length) {
          const empty = document.createElement('p');
          empty.className = 'branch-schedule-empty';
          empty.textContent = 'Sin días ni horarios de atención configurados.';
          scheduleList.appendChild(empty);
        }
        card.appendChild(scheduleList);
        const actions = document.createElement('div');
        actions.className = 'branch-actions';
        const addDay = document.createElement('button');
        addDay.type = 'button';
        addDay.className = 'btn-ghost';
        addDay.textContent = 'Agregar día';
        addDay.dataset.addSchedule = String(branchIndex);
        const deleteBranch = document.createElement('button');
        deleteBranch.type = 'button';
        deleteBranch.className = 'btn-ghost branch-delete';
        deleteBranch.textContent = 'Eliminar sucursal';
        deleteBranch.dataset.deleteBranch = String(branchIndex);
        actions.append(addDay, deleteBranch);
        card.appendChild(actions);
        container.appendChild(card);
      });
      if (!branchDetails.length) container.innerHTML = '<p class="pay-empty">No hay sucursales registradas.</p>';
      refreshBranchSelects();
    }

    function refreshBranchSelects() {
      branches = branchDetails.map(branch => branch.name);
      const currentAppointmentBranch = $('apptBranch').value;
      const currentAgendaBranch = $('agendaBranchFilter').value;
      $('agendaBranchFilter').innerHTML = '<option value="">Todas las sucursales</option>';
      branches.forEach(branch => {
        const option = document.createElement('option');
        option.value = branch;
        option.textContent = branch;
        $('agendaBranchFilter').appendChild(option);
      });
      if (branches.includes(currentAgendaBranch)) $('agendaBranchFilter').value = currentAgendaBranch;
      if ($('apptBranch')) {
        fillSelect('apptBranch', branches.map(branch => [branch, branch]), branches.includes(currentAppointmentBranch) ? currentAppointmentBranch : branches[0]);
        updateAppointmentBoxes();
      }
    }

    function updateAppointmentBoxes() {
      const branch = $('apptBranch').value;
      const availableBoxes = Object.keys(branchByBox).filter(box => branchByBox[box] === branch);
      fillSelect('apptBox', availableBoxes.map(box => [box, box]), availableBoxes.includes($('apptBox').value) ? $('apptBox').value : availableBoxes[0]);
    }

    function updateAppointmentTimes(preferredMinute) {
      const branch = $('apptBranch').value;
      const dayOffset = getDateOffset($('apptDate').value);
      if (!Number.isFinite(dayOffset)) {
        fillSelect('apptTime', [['', 'Selecciona una fecha']]);
        return;
      }
      const date = getAgendaDate(dayOffset);
      const weekday = weekdayNames[date.getDay()];
      const schedule = (branchSchedules[branch] || []).find(item => item.day === weekday);
      if (!schedule) {
        fillSelect('apptTime', [['', 'Sucursal cerrada este día']]);
        return;
      }
      const open = schedule.start.split(':').reduce((hours, minutes) => hours * 60 + Number(minutes), 0);
      const close = schedule.end.split(':').reduce((hours, minutes) => hours * 60 + Number(minutes), 0);
      const choices = [];
      const duration = Number($('apptDur').value) || 30;
      for (let minute = open; minute + duration <= close; minute += 30) {
        choices.push([minute, fmtMin(minute)]);
      }
      fillSelect('apptTime', choices.length ? choices : [['', 'Sin horas disponibles']], choices.some(([minute]) => Number(minute) === Number(preferredMinute)) ? preferredMinute : choices[0]?.[0]);
    }

    function renderDoctors() {
      const rows = $('doctorRows');
      if (!rows) return;
      rows.replaceChildren();
      doctors.forEach(doctor => {
        const row = document.createElement('tr');
        const branch = branches.includes(branchByDoctor[doctor.name]) ? branchByDoctor[doctor.name] : '';
        const hours = branch ? (branchSchedules[branch] || []).map(schedule => `${schedule.day.slice(0, 3)} ${schedule.start}–${schedule.end}`).join(', ') : 'Sin horario asignado';
        [doctor.name, doctor.spec, branch || 'Sin sucursal asignada', hours || 'Sin horario asignado'].forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });
        rows.appendChild(row);
      });
    }

    function renderBoxRows() {
      const rows = $('boxRows');
      rows.replaceChildren();
      const statuses = { 'Box 1': 'Disponible', 'Box 2': 'En uso', 'Box 3': 'Disponible', 'Box 4': 'Disponible' };
      Object.keys(branchByBox).forEach(box => {
        const row = document.createElement('tr');
        const summary = box === 'Box 2' || box === 'Box 4' ? 'Unidad dental equipada' : 'Unidad dental general';
        const values = [box, branchByBox[box], summary];
        values.forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });
        const statusCell = document.createElement('td');
        const status = document.createElement('span');
        status.className = `status-pill${statuses[box] === 'En uso' ? ' busy' : ''}`;
        status.textContent = statuses[box] || 'Disponible';
        statusCell.appendChild(status);
        row.appendChild(statusCell);
        const actionCell = document.createElement('td');
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn-sm';
        button.textContent = 'Ver equipo';
        button.dataset.equipmentBox = box;
        actionCell.appendChild(button);
        row.appendChild(actionCell);
        rows.appendChild(row);
      });
      if (!rows.children.length) rows.innerHTML = '<tr><td class="pay-empty" colspan="5">No hay boxes registrados.</td></tr>';
    }

    function updateApptHint() {
      const hint = $('apptHint');
      const raw = $('apptRut').value;
      const name = findByRut(raw);
      hint.className = 'hint';
      if (!raw.trim()) hint.textContent = 'Ingresa el RUT para buscar al paciente.';
      else if (name) { hint.classList.add('ok'); hint.textContent = `✓ ${name} · Alergia: ${patients[name].allergy}`; }
      else if (normRut(raw).length >= 8 && !isValidRut(raw)) { hint.classList.add('bad'); hint.textContent = 'El RUT no es válido: revisa el dígito verificador.'; }
      else if (isValidRut(raw)) { hint.classList.add('new-patient'); hint.textContent = 'RUT válido, paciente nuevo: completa nombre, apellido y teléfono para crear su ficha al agendar.'; }
      else { hint.classList.add('bad'); hint.textContent = 'Ingresa un RUT válido o selecciona un paciente existente.'; }
    }

    function openApptModal(patientName, appointment = null) {
      const patient = patientName ? patients[patientName] : null;
      if (!branches.length) return showToast('No hay sucursales disponibles para agendar.');
      state.editingAppointmentId = appointment ? appointment.id : null;
      $('apptTitle').textContent = appointment ? 'Modificar cita' : 'Nueva cita';
      $('apptSubmit').textContent = appointment ? 'Guardar cambios' : 'Agendar cita';
      fillSelect('apptBranch', branches.map(branch => [branch, branch]), appointment ? (appointment.branch || branchByBox[appointment.box]) : branchByBox['Box 1']);
      fillSelect('apptDoctor', doctors.map(d => [d.name, `${d.name} · ${d.spec}`]), patients[patientName] && patients[patientName].doctor);
      $('apptDate').min = toDateInputValue(getAgendaDate(0));
      $('apptDate').max = toDateInputValue(getAgendaDate(6));
      $('apptDate').value = toDateInputValue(getAgendaDate(appointment ? appointment.dayOffset : state.selectedDayOffset));
      updateAppointmentBoxes();
      fillSelect('apptProc', procedureOptions.map(p => [p, `${p} · ${formatCLP(treatmentPrices[p])}`]));
      fillSelect('apptDur', [30, 45, 60].map(d => [d, `${d} minutos`]));
      if (appointment) {
        fillSelect('apptBox', Object.keys(branchByBox).filter(box => branchByBox[box] === $('apptBranch').value).map(box => [box, box]), appointment.box);
        fillSelect('apptProc', procedureOptions.map(p => [p, `${p} · ${formatCLP(treatmentPrices[p])}`]), appointment.procedure);
        fillSelect('apptDur', [30, 45, 60].map(d => [d, `${d} minutos`]), appointment.duration);
        $('apptDoctor').value = appointment.doctor;
      }
      updateAppointmentTimes(appointment ? appointment.startMinutes : undefined);
      $('apptRut').value = patient ? patient.rut : '';
      $('apptFirstName').value = patient ? patientName.split(' ')[0] : '';
      $('apptLastName').value = patient ? patientName.split(' ').slice(1).join(' ') : '';
      $('apptPhone').value = patient ? patient.phone : '';
      $('apptEmail').value = patient ? patient.email : '';
      $('apptError').textContent = '';
      updateApptHint();
      updateApptCost();
      $('apptModal').hidden = false;
      $('apptRut').focus();
    }
    const closeApptModal = () => {
      $('apptModal').hidden = true;
      state.editingAppointmentId = null;
    };

    function showToast(msg) {
      const t = $('toast');
      t.textContent = msg; t.classList.add('show');
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => t.classList.remove('show'), 3200);
    }

    let pendingConfirmationAction = null;
    let confirmationReturnFocus = null;

    function openConfirmation({ title, message, confirmLabel = 'Eliminar', onConfirm }) {
      $('confirmationTitle').textContent = title;
      $('confirmationMessage').textContent = message;
      $('confirmAction').textContent = confirmLabel;
      pendingConfirmationAction = onConfirm;
      confirmationReturnFocus = document.activeElement;
      $('confirmationModal').hidden = false;
      $('confirmAction').focus();
    }

    function closeConfirmation(confirmed = false) {
      $('confirmationModal').hidden = true;
      const action = pendingConfirmationAction;
      pendingConfirmationAction = null;
      if (confirmed && action) action();
      if (confirmationReturnFocus && confirmationReturnFocus.isConnected) confirmationReturnFocus.focus();
      confirmationReturnFocus = null;
    }

    function saveAppointment(e) {
      e.preventDefault();
      const err = (m) => { $('apptError').textContent = m; };
      const rut = $('apptRut').value.trim();
      let name = findByRut(rut);
      let newPatient = null;
      if (!isValidRut(rut)) return err('El RUT no es válido. Revisa el número y su dígito verificador.');
      if (!name) {
        const firstName = $('apptFirstName').value.trim();
        const lastName = $('apptLastName').value.trim();
        const phone = $('apptPhone').value.trim();
        if (!firstName || !lastName || !phone) return err('Para crear la ficha, completa nombre, apellido y teléfono.');
        const phoneDigits = phone.replace(/\D/g, '');
        if (!((phoneDigits.length === 9 && phoneDigits.startsWith('9')) || (phoneDigits.length === 11 && phoneDigits.startsWith('569')))) {
          return err('Ingresa un teléfono celular chileno válido para crear la ficha.');
        }
        const email = $('apptEmail').value.trim();
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return err('Ingresa un correo válido o deja el campo vacío.');
        name = `${firstName} ${lastName}`;
        if (patients[name] || Object.values(patients).some(patient => normRut(patient.rut) === normRut(rut))) return err('Ya existe una ficha con ese nombre o RUT.');
        newPatient = { rut: formatRut(rut), allergy: 'No registrada', doctor: $('apptDoctor').value, phone, email };
      }
      const doctor = $('apptDoctor').value, box = $('apptBox').value, procedure = $('apptProc').value;
      const branch = $('apptBranch').value;
      const day = getDateOffset($('apptDate').value), start = +$('apptTime').value, dur = +$('apptDur').value, end = start + dur;
      if (!Number.isInteger(day) || day < 0 || day > 6) return err('Selecciona una fecha disponible del calendario.');
      if (!$('apptTime').value || !Number.isFinite(start) || !Number.isFinite(dur)) return err('No hay horas disponibles con esa duración para el día seleccionado.');
      const date = getAgendaDate(day);
      const schedule = (branchSchedules[branch] || []).find(item => item.day === weekdayNames[date.getDay()]);
      if (!schedule) return err('La sucursal no atiende el día seleccionado.');
      const openingTime = schedule.start.split(':').reduce((hours, minutes) => hours * 60 + Number(minutes), 0);
      const closingTime = schedule.end.split(':').reduce((hours, minutes) => hours * 60 + Number(minutes), 0);
      if (start < openingTime) return err(`La cita no puede comenzar antes de la apertura (${schedule.start}).`);
      if (end > closingTime) return err(`La cita debe terminar antes del cierre de la sucursal (${schedule.end}).`);
      if (!box || branchByBox[box] !== branch) return err('Selecciona un box disponible en la sucursal elegida.');
      const editingAppointment = appointments.find(item => item.id === state.editingAppointmentId);
      const clash = appointments.find(a => a.id !== state.editingAppointmentId && a.dayOffset === day && a.startMinutes < end && a.endMinutes > start &&
        (a.doctor === doctor || ((a.branch || branchByBox[a.box]) === branch && a.box === box) || a.patient === name));
      if (clash) {
        const who = clash.doctor === doctor ? doctor : ((clash.branch || branchByBox[clash.box]) === branch && clash.box === box) ? `${box} · ${branch}` : name;
        return err(`${who} ya tiene una cita de ${clash.time} a ${fmtMin(clash.endMinutes)}. Elige otro horario o recurso.`);
      }
      if (newPatient) {
        const wasDeleted = deletedPatientNames.delete(name);
        if (wasDeleted && !saveStoredValue('dienteFelizDeletedPatients', [...deletedPatientNames])) {
          deletedPatientNames.add(name);
          return err('No se pudo registrar la ficha en este navegador. Revisa el almacenamiento y vuelve a intentar.');
        }
        patients[name] = newPatient;
        patientToothStates[name] = Array.from({ length: 32 }, () => 'healthy');
        paymentsByPatient[name] = { treatment: procedure, total: priceOf(procedure) || 0, convenio: null, overdue: false, payments: [] };
        if (!saveStoredValue('dienteFelizPatients', patients)) {
          delete patients[name];
          delete patientToothStates[name];
          delete paymentsByPatient[name];
          if (wasDeleted) {
            deletedPatientNames.add(name);
            saveStoredValue('dienteFelizDeletedPatients', [...deletedPatientNames]);
          }
          return err('No se pudo guardar la ficha del paciente en este navegador. Revisa el almacenamiento y vuelve a intentar.');
        }
      }
      const item = { ...(editingAppointment || {}), id: editingAppointment ? editingAppointment.id : Date.now(), time: fmtMin(start), patient: name, doctor, procedure, box, branch, duration: dur, budget: dur, overlap: fmtMin(end),
        tone: doctors.find(d => d.name === doctor).tone, startMinutes: start, endMinutes: end, dayOffset: day };
      if (editingAppointment) Object.assign(editingAppointment, item);
      else appointments.push(item);
      state.selectedDayOffset = day;
      state.selectedAppointmentId = item.id;
      state.editingAppointmentId = null;
      renderPatientList();
      renderClinicalPatientList();
      renderReportRows();
      renderDashboard();
      if (state.selectedPatient === name) loadPatient(name);
      renderWeekStrip(); renderAgendaDate(); initAgenda();
      selectAppointment(item);
      closeApptModal();
      showView('agenda');
      showToast(`${editingAppointment ? 'Cita modificada' : 'Cita agendada'}: ${name} · ${item.time} · ${doctor} · ${box}`);
    }

    function logout() {
      $('appShell').classList.add('locked');
      $('login').hidden = false;
      $('loginPass').value = '';
      $('loginUser').focus();
    }

    $('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const userInput = $('loginUser');
      const passwordInput = $('loginPass');
      const user = userInput.value.trim();
      const password = passwordInput.value.trim();
      const missingFields = [];
      if (!user) missingFields.push('usuario o correo');
      if (!password) missingFields.push('contraseña');
      if (missingFields.length) {
        $('loginError').textContent = `Por favor, completa ${missingFields.join(' y ')} para continuar.`;
        $('loginError').classList.add('is-visible');
        userInput.setAttribute('aria-invalid', String(!user));
        passwordInput.setAttribute('aria-invalid', String(!password));
        (user ? passwordInput : userInput).focus();
        return;
      }
      $('loginError').textContent = '';
      $('loginError').classList.remove('is-visible');
      userInput.setAttribute('aria-invalid', 'false');
      passwordInput.setAttribute('aria-invalid', 'false');
      const nick = user.split('@')[0];
      $('userName').textContent = nick.charAt(0).toUpperCase() + nick.slice(1);
      $('userAvatar').textContent = nick.slice(0, 2).toUpperCase();
      $('login').hidden = true;
      $('appShell').classList.remove('locked');
      renderDashboard();
      showView('home');
    });
    ['loginUser', 'loginPass'].forEach((id) => {
      $(id).addEventListener('input', () => {
        const input = $(id);
        if (input.value.trim()) input.setAttribute('aria-invalid', 'false');
        if ($('loginUser').value.trim() && $('loginPass').value.trim()) {
          $('loginError').textContent = '';
          $('loginError').classList.remove('is-visible');
        }
      });
    });
    $('logoutBtn').addEventListener('click', logout);
    $('newApptBtn').addEventListener('click', () => openApptModal());
    $('editAppointment').addEventListener('click', () => {
      const appointment = appointments.find(item => item.id === state.selectedAppointmentId);
      if (appointment) openApptModal(appointment.patient, appointment);
    });
    $('deleteAppointment').addEventListener('click', () => {
      const index = appointments.findIndex(item => item.id === state.selectedAppointmentId);
      if (index < 0) return;
      const currentAppointment = appointments[index];
      openConfirmation({
        title: '¿Eliminar esta cita?',
        message: `Se eliminará la cita de ${currentAppointment.patient} de las ${currentAppointment.time}. Esta acción no se puede deshacer.`,
        onConfirm: () => {
          const [appointment] = appointments.splice(index, 1);
          const remaining = appointments.find(item => item.dayOffset === state.selectedDayOffset) || appointments[0];
          state.selectedAppointmentId = null;
          renderWeekStrip();
          renderAgendaDate();
          initAgenda();
          renderDashboard();
          renderReportRows();
          if (patients[appointment.patient]) loadPatient(appointment.patient);
          if (remaining) selectAppointment(remaining);
          else {
            $('editAppointment').disabled = true;
            $('deleteAppointment').disabled = true;
          }
          showToast(`Cita eliminada: ${appointment.patient} · ${appointment.time}.`);
        }
      });
    });
    $('apptForm').addEventListener('submit', saveAppointment);
    $('cancelConfirmation').addEventListener('click', () => closeConfirmation());
    $('confirmAction').addEventListener('click', () => closeConfirmation(true));
    $('confirmationModal').addEventListener('click', event => {
      if (event.target === event.currentTarget) closeConfirmation();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !$('confirmationModal').hidden) closeConfirmation();
    });
    $('apptRut').addEventListener('input', () => {
      updateApptHint();
      updateApptCost();
      const patientName = findByRut($('apptRut').value);
      if (patientName) {
        const patient = patients[patientName];
        $('apptFirstName').value = patientName.split(' ')[0];
        $('apptLastName').value = patientName.split(' ').slice(1).join(' ');
        $('apptPhone').value = patient.phone || '';
        $('apptEmail').value = patient.email || '';
      }
    });
    $('apptProc').addEventListener('change', updateApptCost);
    $('apptDur').addEventListener('change', () => updateAppointmentTimes(Number($('apptTime').value)));
    $('apptBranch').addEventListener('change', () => {
      updateAppointmentBoxes();
      updateAppointmentTimes();
    });
    $('apptDate').addEventListener('change', () => updateAppointmentTimes());
    $('apptModal').addEventListener('click', (e) => { if (e.target === e.currentTarget || e.target.closest('[data-close]')) closeApptModal(); });
    $('boxRows').addEventListener('click', (event) => {
      const button = event.target.closest('[data-equipment-box]');
      if (button) {
        const boxName = button.dataset.equipmentBox;
        $('equipmentTitle').textContent = `Equipo · ${boxName}`;
        $('equipmentBranch').textContent = branchByBox[boxName];
        const list = $('equipmentList');
        list.replaceChildren();
        equipmentByBox[boxName].forEach((equipment) => {
          const item = document.createElement('li');
          item.textContent = equipment;
          list.appendChild(item);
        });
        $('equipmentModal').hidden = false;
        $('equipmentModal').querySelector('[data-equipment-close]').focus();
      }
    });
    const closeEquipmentModal = () => { $('equipmentModal').hidden = true; };
    $('equipmentModal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget || e.target.closest('[data-equipment-close]')) closeEquipmentModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeApptModal();
        closeEquipmentModal();
      }
    });
    $('rutSearch').addEventListener('input', renderPatientList);
    $('clinicalRutSearch').addEventListener('input', renderClinicalPatientList);
    $('patientRows').addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      const row = event.target.closest('tr');
      const name = row ? row.dataset.patient : null;
      if (name) openRecord(name);
    });
    $('clinicalPatientRows').addEventListener('click', (event) => {
      const deleteButton = event.target.closest('button[data-delete-patient]');
      if (deleteButton) {
        deletePatientRecord(deleteButton.dataset.deletePatient);
        return;
      }
      const button = event.target.closest('button[data-open-clinical-record]');
      if (!button) return;
      const name = button.dataset.openClinicalRecord;
      if (!name || !patients[name]) return showToast('No se pudo abrir la ficha seleccionada.');
      openRecord(name);
    });
    $('globalRut').addEventListener('input', renderGlobalResults);
    document.addEventListener('click', (e) => { if (!e.target.closest('.topbar-search')) $('globalResults').hidden = true; });
    $('sideRecord').addEventListener('click', () => openRecord(state.selectedPatient));
    $('sidePay').addEventListener('click', () => openRecord(state.selectedPatient, 'payments'));
    $('backButton').addEventListener('click', () => {
      if (state.navigationHistory.length) window.history.back();
      else showView('home');
    });
    $('backToPatients').addEventListener('click', () => {
      showView('patients', { recordOpen: false });
    });
    $('editPatient').addEventListener('click', openPatientEditor);
    $('deletePatient').addEventListener('click', () => deletePatientRecord(state.selectedPatient));
    $('editAntecedents').addEventListener('click', openPatientEditor);
    $('patientForm').addEventListener('submit', savePatient);
    $('radiographForm').addEventListener('submit', saveRadiograph);
    $('cancelRadiographEdit').addEventListener('click', resetRadiographForm);
    $('radiographHistory').addEventListener('click', event => {
      const editButton = event.target.closest('button[data-edit-radiograph]');
      if (editButton) return editRadiograph(Number(editButton.dataset.editRadiograph));
      const deleteButton = event.target.closest('button[data-delete-radiograph]');
      if (deleteButton) deleteRadiograph(Number(deleteButton.dataset.deleteRadiograph));
    });
    $('patientRut').addEventListener('input', () => {
      const valid = isValidRut($('patientRut').value);
      $('patientRutHint').textContent = valid ? `RUT válido · ${formatRut($('patientRut').value)}` : 'Verifica el RUT y su dígito verificador.';
      $('patientRutHint').className = `hint ${valid ? 'ok' : 'bad'}`;
    });
    $('patientModal').addEventListener('click', event => {
      if (event.target === event.currentTarget || event.target.closest('[data-patient-close]')) $('patientModal').hidden = true;
    });
    $('toothStateSelect').addEventListener('change', event => updateToothState(event.target.value));
    $('toothProcedure').addEventListener('change', event => {
      if (event.target.value) showToast(`${event.target.value} seleccionada para el diente FDI ${toothNumbers[state.selectedToothIndex]}.`);
    });
    $('inventoryRows').addEventListener('click', event => {
      const button = event.target.closest('[data-inventory-action]');
      if (!button) return;
      const item = inventory.find(entry => entry.id === button.dataset.inventoryId);
      const quantity = Number(button.closest('tr').querySelector('input').value);
      if (!item || !Number.isInteger(quantity) || quantity <= 0) return showToast('Ingresa una cantidad entera mayor que cero.');
      if (button.dataset.inventoryAction === 'use' && quantity > item.stock) return showToast(`Stock insuficiente: quedan ${item.stock} ${item.unit}.`);
      const stockChange = button.dataset.inventoryAction === 'use' ? -quantity : quantity;
      item.stock += stockChange;
      inventoryTransactions.push({
        itemId: item.id,
        action: button.dataset.inventoryAction,
        quantity,
        stockAfter: item.stock,
        createdAt: new Date().toISOString()
      });
      const inventoryState = {
        stock: Object.fromEntries(inventory.map(entry => [entry.id, entry.stock])),
        transactions: inventoryTransactions
      };
      if (!saveStoredValue('dienteFelizInventory', inventoryState)) {
        inventoryTransactions.pop();
        item.stock -= stockChange;
        renderInventory();
        return;
      }
      renderInventory();
      showToast(button.dataset.inventoryAction === 'use' ? `Consumo registrado: ${quantity} ${item.unit} de ${item.name}.` : `Reposición registrada: ${quantity} ${item.unit} de ${item.name}.`);
    });
    const signatureCanvas = $('signatureCanvas');
    const signatureContext = signatureCanvas.getContext('2d');
    signatureContext.lineWidth = 2.2;
    signatureContext.lineCap = 'round';
    signatureContext.lineJoin = 'round';
    const signaturePoint = event => {
      const bounds = signatureCanvas.getBoundingClientRect();
      return {
        x: (event.clientX - bounds.left) * signatureCanvas.width / bounds.width,
        y: (event.clientY - bounds.top) * signatureCanvas.height / bounds.height
      };
    };
    signatureCanvas.addEventListener('pointerdown', event => {
      event.preventDefault();
      signatureCanvas.setPointerCapture(event.pointerId);
      const point = signaturePoint(event);
      signatureContext.beginPath();
      signatureContext.moveTo(point.x, point.y);
      state.signatureDrawn = false;
    });
    signatureCanvas.addEventListener('pointermove', event => {
      if (!signatureCanvas.hasPointerCapture(event.pointerId)) return;
      const point = signaturePoint(event);
      signatureContext.lineTo(point.x, point.y);
      signatureContext.stroke();
      state.signatureDrawn = true;
    });
    signatureCanvas.addEventListener('pointerup', event => {
      if (signatureCanvas.hasPointerCapture(event.pointerId)) signatureCanvas.releasePointerCapture(event.pointerId);
    });
    $('clearSignature').addEventListener('click', () => {
      signatureContext.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
      state.signatureDrawn = false;
    });
    const consentProcedureInformation = {
      'Evaluación de tercer molar': 'El profesional revisará la muela del juicio y su posición, con examen e imágenes si son necesarias, para determinar si requiere tratamiento. Esto ayuda a planificar los cuidados. Según los hallazgos, se puede controlar y observar o tratarla; la evaluación puede causar molestias leves.',
      'Exodoncia de tercer molar': 'Consiste en extraer una muela del juicio, habitualmente con anestesia local; en algunos casos se requiere una pequeña incisión y puntos. Puede ayudar a tratar dolor, infección u otros problemas. Después pueden presentarse dolor, hinchazón, sangrado o infección, y raramente alteraciones temporales de la sensibilidad. Si es adecuado, una alternativa es observarla y controlarla.',
      Endodoncia: 'Se limpia el interior del diente para retirar el tejido pulpar inflamado o infectado, desinfectar los conductos y sellarlos; luego el diente puede necesitar una restauración. El objetivo es conservarlo, aunque puede persistir la molestia o infección y requerir otro tratamiento. La alternativa puede ser extraer el diente; no tratarlo puede empeorar el problema.',
      'Restauración dental': 'Se retira el tejido dañado y se reconstruye el diente con un material restaurador. Busca recuperar su forma y función. Puede quedar sensibilidad temporal y, si el daño es profundo, necesitarse otro tratamiento. Según el caso, las alternativas pueden incluir vigilancia, una restauración distinta o una corona.',
      'Extracción dental': 'Consiste en retirar el diente con anestesia local cuando no es posible o conveniente conservarlo. Puede aliviar dolor o eliminar un foco de infección. Después pueden ocurrir dolor, hinchazón, sangrado o infección. Si el diente puede salvarse, se pueden evaluar opciones como restauración o endodoncia; también se conversará sobre reemplazarlo si corresponde.',
      'Tratamiento periodontal': 'Busca controlar la inflamación de las encías y limpiar placa y depósitos alrededor o debajo de ellas. Puede ayudar a mantener la salud de las encías y los dientes, y a veces requiere varias sesiones. Es posible sentir sensibilidad o notar sangrado leve. El profesional explicará las opciones de tratamiento y control según el estado de tus encías.',
      'Otro procedimiento dental': 'Pide al profesional que te explique en qué consiste este procedimiento, qué beneficios se esperan, cuáles son sus riesgos y qué alternativas existen para tu caso. Asegúrate de resolver tus dudas antes de aceptar.'
    };
    $('consentProcedure').addEventListener('change', () => {
      const procedure = $('consentProcedure').value;
      const info = $('consentProcedureInfo');
      info.hidden = !procedure;
      if (!procedure) return;
      $('consentProcedureInfoTitle').textContent = `Información sobre ${procedure.toLowerCase()}`;
      $('consentProcedureInfoText').textContent = consentProcedureInformation[procedure];
    });
    $('saveConsent').addEventListener('click', () => {
      if (!$('consentProcedure').value || !$('consentAccepted').checked || !state.signatureDrawn) {
        return $('consentError').textContent = 'Completa el procedimiento, la aceptación y la firma antes de guardar.';
      }
      const record = {
        procedure: $('consentProcedure').value,
        information: consentProcedureInformation[$('consentProcedure').value],
        rut: patients[state.selectedPatient].rut,
        createdAt: new Date().toISOString(),
        signature: signatureCanvas.toDataURL('image/png')
      };
      if (!Array.isArray(consentRecords[state.selectedPatient])) consentRecords[state.selectedPatient] = [];
      consentRecords[state.selectedPatient].push(record);
      if (!saveStoredValue('dienteFelizConsents', consentRecords)) {
        consentRecords[state.selectedPatient].pop();
        return $('consentError').textContent = 'No se pudo guardar el consentimiento en este navegador. No se registró la autorización.';
      }
      $('consentAccepted').checked = false;
      signatureContext.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
      state.signatureDrawn = false;
      $('consentError').textContent = '';
      $('consentNote').textContent = 'Consentimiento guardado en este navegador.';
      renderConsentHistory(state.selectedPatient);
      showToast('Consentimiento guardado.');
    });
    $('printConsent').addEventListener('click', () => {
      if (!$('consentProcedure').value || !$('consentAccepted').checked || !state.signatureDrawn) {
        return $('consentError').textContent = 'Completa el procedimiento, la aceptación y la firma antes de imprimir.';
      }
      $('consentError').textContent = '';
      window.print();
    });
    $('agendaBranchFilter').addEventListener('change', (e) => { state.branchFilter = e.target.value; initAgenda(); });
    $('branchCards').addEventListener('click', (event) => {
      const target = event.target.closest('button');
      if (!target) return;
      const branchIndex = Number(target.dataset.addSchedule ?? target.dataset.deleteBranch);
      if (target.hasAttribute('data-add-schedule')) {
        const branch = branchDetails[branchIndex];
        const usedDays = (branchSchedules[branch.name] || []).map(schedule => schedule.day);
        const nextDay = weekdayNames.find(day => !usedDays.includes(day));
        if (!nextDay) return showToast('Ya configuraste todos los días de la semana.');
        branchSchedules[branch.name].push({ day: nextDay, start: '09:00', end: '19:00' });
        renderBranchCards();
        renderDoctors();
        return;
      }
      if (target.hasAttribute('data-delete-branch')) {
        const branch = branchDetails[branchIndex];
        if (!branch) return;
        const branchBoxes = Object.keys(branchByBox).filter(box => branchByBox[box] === branch.name);
        const hasAppointments = appointments.some(item => (item.branch || branchByBox[item.box]) === branch.name);
        const extra = hasAppointments ? ' Se eliminarán las citas agendadas asociadas; el historial de atenciones realizadas se conservará.' : '';
        openConfirmation({
          title: '¿Eliminar esta sucursal?',
          message: `Se eliminará ${branch.name} junto con sus boxes.${extra}`,
          confirmLabel: 'Eliminar sucursal',
          onConfirm: () => {
            branchBoxes.forEach(box => {
              delete branchByBox[box];
              delete equipmentByBox[box];
            });
            for (let index = appointments.length - 1; index >= 0; index -= 1) {
              if (appointments[index].branch === branch.name || branchBoxes.includes(appointments[index].box)) appointments.splice(index, 1);
            }
            delete branchSchedules[branch.name];
            doctors.filter(doctor => branchByDoctor[doctor.name] === branch.name).forEach(doctor => delete branchByDoctor[doctor.name]);
            branchDetails.splice(branchIndex, 1);
            if (state.branchFilter === branch.name) state.branchFilter = '';
            state.selectedDayOffset = 0;
            renderBranchCards();
            renderDoctors();
            renderBoxRows();
            $('agendaBranchFilter').value = state.branchFilter;
            renderWeekStrip();
            renderAgendaDate();
            initAgenda();
            renderDashboard();
            renderPatientList();
            renderReportRows();
            showToast(`Sucursal eliminada: ${branch.name}`);
          }
        });
        return;
      }
      const row = target.closest('.branch-schedule-row');
      if (!row) return;
      const branch = branchDetails[Number(row.dataset.branchIndex)];
      const scheduleIndex = Number(row.dataset.scheduleIndex);
      const schedules = branchSchedules[branch.name];
      if (target.hasAttribute('data-delete-schedule')) {
        schedules.splice(scheduleIndex, 1);
        renderBranchCards();
        renderDoctors();
        initAgenda();
        return showToast(`Horario eliminado para ${branch.name}.`);
      }
      if (target.hasAttribute('data-save-schedule')) {
        const day = row.querySelector('[data-schedule-day]').value;
        const start = row.querySelector('[data-schedule-start]').value;
        const end = row.querySelector('[data-schedule-end]').value;
        const startMinutes = start.split(':').reduce((hours, minutes) => hours * 60 + Number(minutes), 0);
        const endMinutes = end.split(':').reduce((hours, minutes) => hours * 60 + Number(minutes), 0);
        if (!start || !end || endMinutes <= startMinutes) return showToast('La hora de cierre debe ser posterior a la hora de apertura.');
        if (schedules.some((schedule, index) => index !== scheduleIndex && schedule.day === day)) return showToast(`Ya existe un horario para ${day}.`);
        schedules[scheduleIndex] = { day, start, end };
        renderBranchCards();
        renderDoctors();
        initAgenda();
        return showToast(`Horario actualizado: ${day}, ${start}–${end}.`);
      }
    });
    $('agendaDoctorFilter').innerHTML += doctors.map(d => `<option value="${d.name}">${d.name}</option>`).join('');
    $('agendaDoctorFilter').addEventListener('change', (e) => { state.doctorFilter = e.target.value; initAgenda(); });
    $('reportRut').addEventListener('input', renderReportRows);
    $('exportPatients').addEventListener('click', () => downloadPatientExcel(Object.keys(patients), 'fichas-pacientes.xls'));
    $('exportReport').addEventListener('click', () => {
      const q = normRut($('reportRut').value);
      downloadPatientExcel(Object.keys(patients).filter(name => !q || normRut(patients[name].rut).includes(q)), 'reporte-pacientes.xls');
    });
    $('exportPatient').addEventListener('click', () => downloadPatientExcel([state.selectedPatient], `ficha-${normRut(patients[state.selectedPatient].rut)}.xls`));
    document.querySelectorAll('[data-open-appointment]').forEach(button => button.addEventListener('click', () => openApptModal()));
    document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showView(button.dataset.go)));
    document.querySelectorAll('[data-demo-action]').forEach(button => button.addEventListener('click', () => showToast(`Acción de demostración: ${button.dataset.demoAction}.`)));
    renderBranchCards();
    renderDoctors();
    renderBoxRows();
    renderPatientList();
    renderClinicalPatientList();
    renderSummaryPatientSelect();
    renderReportRows();
    renderDashboard();
    renderInventory();
    showView('home');


    /* ===== Costos por tratamiento (valores referenciales del mockup, en CLP) ===== */
    const treatmentPrices = {
      'Control preventivo': 25000, 'Limpieza dental': 35000, 'Evaluación inicial': 20000, 'Endodoncia': 180000,
      'Restauración dental': 90000, 'Blanqueamiento': 120000, 'Evaluación de ortodoncia': 60000, 'Extracción': 45000,
      'Evaluación de tercer molar': 30000, 'Exodoncia de tercer molar': 150000, 'Control de pericoronaritis': 55000
    };
    const priceRules = [['control', 25000], ['revisión', 25000], ['limpieza', 35000], ['blanqueamiento', 120000], ['endodoncia', 180000],
      ['ortodoncia', 60000], ['restauración', 90000], ['exodoncia', 150000], ['extracción', 45000], ['evaluación', 20000], ['consulta', 20000]];
    const priceOf = (proc) => {
      if (treatmentPrices[proc] != null) return treatmentPrices[proc];
      const low = (proc || '').toLowerCase();
      const hit = priceRules.find(([k]) => low.includes(k));
      return hit ? hit[1] : null;
    };
    const fmtPrice = (proc) => { const p = priceOf(proc); return p == null ? 'A definir' : formatCLP(p); };

    function updateApptCost() {
      const price = priceOf($('apptProc').value);
      const name = findByRut($('apptRut').value);
      const cv = name && paymentsByPatient[name] && paymentsByPatient[name].convenio;
      let html = `<span>Valor del tratamiento</span><strong>${formatCLP(price)}</strong>`;
      if (cv) {
        const d = Math.round(price * cv.pct / 100);
        html += `<span>${cv.name} (${cv.pct} %)</span><strong>− ${formatCLP(d)}</strong>` +
                `<span class="total">Total a pagar</span><strong class="total">${formatCLP(price - d)}</strong>`;
      }
      $('apptCost').innerHTML = html;
    }

    $('priceRows').innerHTML = Object.keys(treatmentPrices).map(n => `<tr><td>${escapeHtml(n)}</td><td class="num">${formatCLP(treatmentPrices[n])}</td></tr>`).join('');
    $('feeRows').innerHTML = $('priceRows').innerHTML;

    const baseSelectAppointment = selectAppointment;
    selectAppointment = (item) => { baseSelectAppointment(item); $('detailPrice').textContent = fmtPrice(item.procedure); };
    selectAppointment(appointments.find(a => a.patient === state.selectedPatient) || appointments[0]);
