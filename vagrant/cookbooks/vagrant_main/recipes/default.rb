include_recipe "apt"
include_recipe "build-essential"
include_recipe "git"
include_recipe "apache2"
include_recipe "rvm::system"
include_recipe "rvm::gem_package"
include_recipe "rvm::vagrant"


# Install packages
%w{ debconf vim screen tmux mc subversion curl make g++ libsqlite3-dev graphviz libxml2-utils lynx links }.each do |a_package|
  package a_package
end

# Install ruby gems
%w{ sass jekyll }.each do |a_gem|
  gem_package a_gem
end

# Initialize sites data bag
sites = []
begin
  sites = data_bag("sites")
rescue
  puts "Unable to load sites data bag."
end

# Configure sites
sites.each do |name|
  site = data_bag_item("sites", name)

  # Add site to apache config
  web_app site["host"] do
    template "sites.conf.erb"
    server_name site["host"]
    server_aliases site["aliases"]
    server_include site["include"]
    docroot site["docroot"]?site["docroot"]:"/vagrant/public/#{site["host"]}"
  end

   # Add site info in /etc/hosts
   bash "hosts" do
     code "echo 127.0.0.1 #{site["host"]} #{site["aliases"].join(' ')} >> /etc/hosts"
   end
end

# Disable default site
apache_site "default" do
  enable false
end
