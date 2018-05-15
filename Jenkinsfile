node {
    stage('Build') {
      echo "build"
      build job: 'Step2'
   }
   stage('Preparation') {
      echo "Preparation"
      build job: 'Step1'
   }
   stage('Results') {
      echo "Results"
      build job: 'Step3'
   }
}