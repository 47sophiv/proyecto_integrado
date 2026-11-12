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
        procedure: 'Alergia: morosidad',
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
      'Paciente A': { rut: '12.345.678-5', allergy: 'penicilina', doctor: 'Dr. Soto', phone: '+56 9 5555 1201', email: 'paciente.a@correo.cl' },
      'Paciente B': { rut: '18.112.654-2', allergy: 'ninguna', doctor: 'Dr. Soto', phone: '+56 9 5555 1202', email: 'paciente.b@correo.cl' },
      'Paciente C': { rut: '16.778.221-9', allergy: 'latex', doctor: 'Dra. Rivas', phone: '+56 9 5555 1203', email: 'paciente.c@correo.cl' },
      'Paciente D': { rut: '20.543.778-5', allergy: 'penicilina', doctor: 'Dra. Pino', phone: '+56 9 5555 1204', email: 'paciente.d@correo.cl' },
      'Paciente E': { rut: '14.226.809-1', allergy: 'ninguna', doctor: 'Dra. Rivas', phone: '+56 9 5555 1205', email: 'paciente.e@correo.cl' },
      'Paciente F': { rut: '19.504.337-8', allergy: 'látex', doctor: 'Dr. Soto', phone: '+56 9 5555 1206', email: 'paciente.f@correo.cl' },
      'Paciente G': { rut: '17.883.420-6', allergy: 'ibuprofeno', doctor: 'Dra. Pino', phone: '+56 9 5555 1207', email: 'paciente.g@correo.cl' },
      'Paciente H': { rut: '15.972.641-3', allergy: 'ninguna', doctor: 'Dr. Soto', phone: '+56 9 5555 1208', email: 'paciente.h@correo.cl' },
      'Paciente I': { rut: '13.809.552-4', allergy: 'ninguna', doctor: 'Dra. Rivas', phone: '+56 9 5555 1209', email: 'paciente.i@correo.cl' },
      'Paciente J': { rut: '21.306.478-2', allergy: 'sulfas', doctor: 'Dra. Pino', phone: '+56 9 5555 1210', email: 'paciente.j@correo.cl' }
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
      activeView: 'patients',
      selectedPatient: 'Camila Rojas',
      currentTab: 'odontograma',
      selectedDayOffset: 0,
      doctorFilter: '',
      branchFilter: '',
      selectedAppointmentId: null,
      editingAppointmentId: null
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
            btn.addEventListener('click', () => cycleTooth(index));
            teeth.appendChild(btn);
          }
          half.appendChild(cap);
          half.appendChild(teeth);
          row.appendChild(half);
        });
        odontogram.appendChild(row);
      });
    }

    function cycleTooth(index) {
      const states = patientToothStates[state.selectedPatient] || patientToothStates['Paciente A'];
      const cycle = ['healthy', 'filled', 'root', 'missing', 'cavity', 'observation'];
      const current = states[index];
      const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
      states[index] = next;
      renderOdontogram();
      const number = toothNumbers[index];
      document.getElementById('toothDetail').textContent =
        `Diente FDI ${number}: ${toothPositions[number % 10]} ${toothQuadrants[Math.floor(number / 10)]}. Estado: ${toothStateLabels[next] || next}.`;
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
          showView(button.dataset.view);
        });
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
    const doctors = [
      { name: 'Dr. Soto', spec: 'Endodoncia y ortodoncia', tone: 'green' },
      { name: 'Dra. Pino', spec: 'Odontología general', tone: 'peach' },
      { name: 'Dra. Rivas', spec: 'Estética y prevención', tone: 'blue' }
    ];
    const procedureOptions = ['Control preventivo', 'Limpieza dental', 'Evaluación inicial', 'Endodoncia', 'Restauración dental', 'Blanqueamiento', 'Evaluación de ortodoncia', 'Extracción'];
    const viewTitles = {
      home: 'Inicio', agenda: 'Agenda', patients: 'Pacientes', record: 'Ficha clínica', payments: 'Presupuestos y pagos',
      dashboard: 'Dashboard', reports: 'Reportes', users: 'Usuarios', doctors: 'Doctores y horarios',
      branches: 'Sucursales', boxes: 'Box', agreements: 'Convenios', fees: 'Aranceles', audit: 'Auditoría'
    };
    const normRut = (v) => v.replace(/[^0-9kK]/g, '').toUpperCase();
    const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const fmtMin = (m) => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
    const findByRut = (v) => { const q = normRut(v); return q.length < 8 ? null : Object.keys(patients).find(n => normRut(patients[n].rut) === q) || null; };
    const searchPatients = (v) => { const q = normRut(v); return Object.keys(patients).filter(n => !q || normRut(patients[n].rut).includes(q)); };

    function showView(view) {
      if (!viewTitles[view]) return;
      $('appShell').dataset.view = view;
      state.activeView = view;
      $('viewTitle').textContent = viewTitles[view];
      document.querySelectorAll('.nav-item').forEach((b) => {
        const on = b.dataset.view === view;
        b.classList.toggle('active', on);
        if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
      });
      window.scrollTo(0, 0);
    }

    function loadPatient(name) {
      state.selectedPatient = name;
      const p = patients[name];
      const next = appointments.filter(a => a.patient === name).sort((a, b) => a.dayOffset - b.dayOffset || a.startMinutes - b.startMinutes)[0];
      $('recordName').textContent = name;
      $('recordMeta').textContent = `RUT ${p.rut} · Alergia: ${p.allergy}`;
      $('clinicalPatientName').textContent = name;
      $('clinicalPatientMeta').textContent = `RUT ${p.rut} · ${next ? 'Próxima atención: ' + next.time : 'Sin citas próximas'}`;
      $('clinicalDoctor').textContent = p.doctor;
      $('clinicalProcedure').textContent = next ? next.procedure : paymentsByPatient[name].treatment;
      $('clinicalAllergy').textContent = p.allergy;
      $('patientContact').innerHTML = `<span><strong>Teléfono:</strong> ${escapeHtml(p.phone || 'Sin registrar')}</span><span><strong>Correo:</strong> ${escapeHtml(p.email || 'Sin registrar')}</span>`;
      renderPatientHistory(name);
      $('toothDetail').textContent = 'Selecciona un diente para ver su número FDI y estado.';
      renderOdontogram();
      renderPayments(name);
    }
    const openRecord = (name, view = 'record') => { loadPatient(name); showView(view); };

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
        row.innerHTML = `<td><strong>${escapeHtml(name)}</strong></td><td>${escapeHtml(patient.rut)}</td><td>${escapeHtml(patient.phone || 'Sin teléfono')}<br>${escapeHtml(patient.email || 'Sin correo')}</td><td>${escapeHtml(patient.doctor)}</td><td>${escapeHtml(patient.allergy)}</td><td><button class="btn-sm primary" type="button" data-open-clinical-record="${escapeHtml(name)}">Ver ficha</button></td>`;
        rows.appendChild(row);
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
      else if (normRut(raw).length >= 8) { hint.classList.add('new-patient'); hint.textContent = 'Paciente nuevo: completa nombre, apellido y teléfono para crear su ficha al agendar.'; }
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
      if (!rut || normRut(rut).length < 8) return err('Ingresa un RUT válido.');
      if (!name) {
        const firstName = $('apptFirstName').value.trim();
        const lastName = $('apptLastName').value.trim();
        const phone = $('apptPhone').value.trim();
        if (!firstName || !lastName || !phone) return err('Para crear la ficha, completa nombre, apellido y teléfono.');
        name = `${firstName} ${lastName}`;
        if (patients[name] || Object.values(patients).some(patient => normRut(patient.rut) === normRut(rut))) return err('Ya existe una ficha con ese nombre o RUT.');
        newPatient = { rut, allergy: 'No registrada', doctor: $('apptDoctor').value, phone, email: $('apptEmail').value.trim() };
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
        patients[name] = newPatient;
        patientToothStates[name] = Array.from({ length: 32 }, () => 'healthy');
        paymentsByPatient[name] = { treatment: procedure, total: priceOf(procedure) || 0, convenio: null, overdue: false, payments: [] };
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
    $('clinicalPatientRows').addEventListener('click', (event) => {
      const button = event.target.closest('[data-open-clinical-record]');
      if (!button) return;
      const name = button.dataset.openClinicalRecord;
      loadPatient(name);
      $('patients-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    $('globalRut').addEventListener('input', renderGlobalResults);
    document.addEventListener('click', (e) => { if (!e.target.closest('.topbar-search')) $('globalResults').hidden = true; });
    $('sideRecord').addEventListener('click', () => openRecord(state.selectedPatient));
    $('sidePay').addEventListener('click', () => openRecord(state.selectedPatient, 'payments'));
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
    renderReportRows();
    renderDashboard();
    showView('home');


    /* ===== Costos por tratamiento (valores referenciales del mockup, en CLP) ===== */
    const treatmentPrices = {
      'Control preventivo': 25000, 'Limpieza dental': 35000, 'Evaluación inicial': 20000, 'Endodoncia': 180000,
      'Restauración dental': 90000, 'Blanqueamiento': 120000, 'Evaluación de ortodoncia': 60000, 'Extracción': 45000
    };
    const priceRules = [['control', 25000], ['revisión', 25000], ['limpieza', 35000], ['blanqueamiento', 120000], ['endodoncia', 180000],
      ['ortodoncia', 60000], ['restauración', 90000], ['extracción', 45000], ['evaluación', 20000], ['consulta', 20000]];
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
