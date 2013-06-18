get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/tweet' do 

Twitter.update(params[:tweet])
redirect "http://www.twitter.com/Richard_Vogt"
end
