class Patient < ApplicationRecord

  def self.import(file)
    require 'csv'
    CSV.foreach(file.path, headers: false).each_with_index do |row, index|
      unless index == 0
        patient = Patient.find_or_initialize_by(name: row[0])
        patient.date  =  row[1]
        patient.number  =  row[2]
        patient.description  =  row[3]    
        patient.save 
      end
    end
    return Patient.all
  end
end
