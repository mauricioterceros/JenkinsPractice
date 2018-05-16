node {
   stage('Build NEW') {
      echo "build new"
      build job: 'Step1'
   }
   stage('Preparation NEW') {
      echo "Preparation modified"
      build job: 'Step2'
   }
   stage('Results') {
      echo "Results"
      build job: 'Step3'
   }
}